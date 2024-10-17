import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Grid,
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
// import e from "express";

const TaskForm = () => {
  const navigate = useNavigate();

  const params = useParams();

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const createTask = async () => {
    console.log("before sending: ", JSON.stringify(task));

    const result = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await result.json();

    console.log(data);
  };

  const updateTask = async () => {
    console.log("before sending: ", JSON.stringify(task));

    const result = await fetch(`http://localhost:5000/tasks/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await result.json();

    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (params.id) {
      updateTask();
    } else {
      createTask();
    }

    // console.log(task)

    setLoading(false);

    navigate("/tasks");
  };

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setTask({ ...task, [e.target.name]: e.target.value });
    // console.log(task)
  };

  const fetchTask = async () => {
    const result = await fetch(`http://localhost:5000/tasks/${params.id}`);
    const data = await result.json();
    setTask(data);
  };

  useEffect(() => {
    if (params.id) {
      fetchTask();
    }
  }, [params.id]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{ backgroundColor: "#1e272e", padding: "1rem" }}
        >
          <Typography variant="5" textAlign="center" color="white">
            {params.id ? "Edit Task" : "Create Task"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Write your title"
                sx={{ display: "block", margin: ".5rem 0" }}
                inputProps={{ style: { color: "white" } }}
                inputLabelProps={{ style: { color: "white" } }}
                name="title"
                onChange={handleChange}
                value={task.title}
              />
              <TextField
                variant="filled"
                label="Write your description"
                multiline
                rows={4}
                sx={{ display: "block", margin: ".5rem 0" }}
                inputProps={{ style: { color: "white" } }}
                inputLabelProps={{ style: { color: "white" } }}
                name="description"
                onChange={handleChange}
                value={task.description}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!task.title || !task.description || loading}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  params.id ? "Edit Task" : "Create"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TaskForm;

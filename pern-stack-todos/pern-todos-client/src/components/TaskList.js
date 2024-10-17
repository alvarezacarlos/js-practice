import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

  const loadTasks = async () => {
    const result = await fetch("http://localhost:5000/tasks");
    const data = await result.json();
    // console.log(data)
    setTasks(data);
  };

  const handleDelete = async (id) => {
    const result = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });
    // const data = await result.json();
    // console.log(data);
    console.log(result);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h1>Task List</h1>
      {tasks.map((task) => (
        <Card
          key={task.id}
          style={{ marginBottom: "0.7rem", backgroundColor: "#1e272e" }}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                color: "white",
              }}
            >
              <Typography>{task.title}</Typography>
              <Typography>{task.description}</Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => navigate(`/tasks/${task.id}/edit`)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={() => handleDelete(task.id)}
                style={{
                  marginLeft: ".5rem",
                }}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default TaskList;

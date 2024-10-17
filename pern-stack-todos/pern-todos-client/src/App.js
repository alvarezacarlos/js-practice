import "./App.css";

import { Routes, Route, useNavigate } from "react-router-dom";

import TaskList from "./components/TaskList";

import TaskForm from "./components/TaskForm";

import Navbar from "./components/Navbar";

// mui.com
import Container from "@mui/material/Container";

function App() {
  const navigate = useNavigate();
  return (
    <Container>
      <Navbar />

      <Routes>
        {/* <Route path="/" element={() => navigate("/tasks")} exact /> */}

        <Route path="/tasks" element={<TaskList />}>          
        </Route>
        <Route path="/tasks/new" element={<TaskForm />}>          
        </Route>
        <Route path="/tasks/:id/edit" element={<TaskForm />}>          
        </Route>
      </Routes>
    </Container>
  );
}

export default App;

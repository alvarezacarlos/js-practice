const { Router } = require("express");

const taskController = require('../controllers/task.controllers')

const router = Router();

router.get("/tasks", taskController.getAllTasks);

router.get("/tasks/:id",taskController.getOneTask);

router.post("/tasks", taskController.createOneTask);

router.delete("/tasks/:id", taskController.deleteOneTask);

router.put("/tasks/:id", taskController.updateOneTask);

module.exports = router;

const express = require('express');
const{getTasks, createTask, updateTask, updateTasks, deleteTask } = require("../controller/taskController");

const router = express.Router();

//get all tasks
router.get("/", getTasks);

//create new task
router.post("/", createTask);

//update task
router.put("/:id", updateTasks);

//update patch
router.patch("/:id", updateTask);

//delete task
router.delete("/:id", deleteTask);

module.exports = router;
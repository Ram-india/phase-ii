const Task = require("../models/task_model");

//Get all tasks

const getTasks = async(req, res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }catch(error){
        res.status(500).json({ error:"Internal server error"});
    }
};

//create new task

const createTask = async(req, res) =>{
    try{
        const task = await Task.create(req.body);
        res.status(201).json(task);
    }catch(error){
        res.status(500).json({ error:"Internal server error"});
    }
};

//update task

const updateTasks = async(req, res) =>{
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!task){
            return res.status(404).json({ error:"Task not found"});
        }
        res.json(task);
    }catch(error){
        res.status(500).json({ error:"Internal server error"});
    }
};
//upadte patch
const updateTask = async(req, res) =>{
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!task){
            return res.status(404).json({ error:"Task not found"});
        }
        res.json(task);
    }catch(error){
        res.status(500).json({ error:"Internal server error"});
    }
};

//delete task

const deleteTask = async(req, res) =>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task){
            return res.status(404).json({ error:"Task not found"});
        }
        res.json({ message:"Task deleted successfully"});
    }catch(error){
        res.status(500).json({ error:"Internal server error"});
    }
};

module.exports ={
    getTasks,
    createTask,
    updateTask,
    updateTasks,
    deleteTask
}
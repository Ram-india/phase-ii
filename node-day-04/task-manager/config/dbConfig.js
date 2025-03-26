const mongoose = require("mongoose");

const connectDB = async() =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/taskManager");
        console.log("Connected to MongoDB");
    }catch(error){
        console.log("Database conection faild");
    }
};

module.exports = connectDB;
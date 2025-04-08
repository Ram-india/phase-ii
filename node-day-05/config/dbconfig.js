const mongoose = require("mongoose");
require("dotenv").config();
const ConnectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log("Database conection faild");
    }
    
};
module.exports = ConnectDB;
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/dbconfig');
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();

//middleware
app.use(bodyParser.json());

//connect to mongoDB
connectDB();

//Routes
app.use("/api/users", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT }`);
});
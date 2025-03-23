const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", respondText);
app.get("/json", respondJson);
app.get("*", respondNotFound);


function respondText(req,res){
    res.setHeader("content-type", "text/plain");
    res.end("Hello World");

}

function respondJson(req, res){
    res.setHeader("content-type", "application/json");
    res.end(
        JSON.stringify({Name:"Ram", qualification:["BE", "MERN Full stack developer"]}));
}   

function respondNotFound(req, res){
    res.writeHead(404, {"content-type": "text/plain"});
    res.end("Not Found");
}

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});
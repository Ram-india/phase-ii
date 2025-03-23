const http = require("http");
require("dotenv").config();

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
   if(req.url === "/"){
    respondText(req, res);
   }else if (req.url === "/json") {
    respondJson(req, res);
   }else{
    respondNotFound(req, res);
   }
});

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

server.listen(port);
console.log(`Server is running at http://localhost:${port}`);
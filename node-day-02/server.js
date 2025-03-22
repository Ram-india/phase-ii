const express = require('express');
const app = express();
const PORT = 3000;

// function to display details

function dispalyName(name){
    return `Hello ${name}!`;
}

function displayAge(age){
    return `My Age is ${age}!`;
}

// route display details

app.get('/',(req,res) => { 
    res.send(dispalyName("Ram"))
});
app.get('/age',(req,res) => { 
    res.send(displayAge("26"))
});

//start the server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

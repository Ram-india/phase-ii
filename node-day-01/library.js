const fs = require("fs");
const path = require("path");

//folder for storing new books

const libraryPath = path.join(__dirname, "library");

//create folder if it doesn't exist

if(fs.existsSync(libraryPath)){
    console.log("Folder already exists");
} 
else{
    fs.mkdirSync(libraryPath);
    console.log("library created");
}


function addBook(bookName, content){
    const bookpath = path.join(libraryPath,`${bookName}.txt`);
    fs.writeFileSync(bookpath, content,(err)=>{
        if(err){
            console.log("Error in adding book");
        }   else{
            console.log("Book added successfully");
        }
    } );
}

addBook("The Alchemist","The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.");
addBook("The Da Vinci Code", "The Da Vinci Code is a 2003 mystery-detective novel by Dan Brown. It is considered a masterpiece of the novel genre and has sold millions of copies worldwide.");
const express =  require("express");
const app = express();
const port = 3000;

//Middleware for parse JSON
app.use(express.json());

//Mock database (array to store books)
let books = [
    {id: 1, title: "Book 1", author: "Author 1"},
    {id: 2, title: "Book 2", author: "Author 2"},
    {id: 3, title: "Book 3", author: "Author 3"},
];

//routes

//1.GET: veiw all books
app.get("/books",(req,res)=>{
    res.json(books);
});

//2.GET : particular book by id
app.get("/books/:id",(req,res)=>{
    const bookId = parseInt(req.params.id);
    const book = books.find((book)=> book.id === bookId);
    if(!book){
        res.status(404).json({error: "Book not found"});
    }else{
        res.json(book);
    }
})
//3.POST: Add a new book
app.post("/books",(req,res)=>{
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(newBook);
});

//4.PUT: Replace a book (update all books)

app.put("/books/:id",(req,res)=>{
    const bookId = parseInt(req.params.id);
    const updatedBook = req.body;
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if(bookIndex === -1){
        res.status(404).json({error: "Book not found"});
    }else{
        books[bookIndex] = {...books[bookIndex], ...updatedBook};
        res.status(200).json(books[bookIndex]);
    }
});
//5.PATCH: Update a book (partially update a book)
app.patch("/books/:id",(req,res)=>{
    const bookId = parseInt(req.params.id);
    const updatedBook = req.body;
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if(bookIndex === -1){
        res.status(404).json({error: "Book not found"});
    }else{
        books[bookIndex] = {...books[bookIndex], ...updatedBook};
        res.status(200).json(books[bookIndex]);
    }
});

//5.Delete: Remove a book
app.delete("/books/:id",(req,res)=>{
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if(bookIndex === -1){
        res.status(404).json({error: "Book not found"});
    }else{
        const deletedBook = books.splice(bookIndex,1);
        res.json(deletedBook [0]);
    }
});

//start the server
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

const express = require("express");
const connectDB = require("./src/infrastructure/config/db");
require("dotenv").config();
// Repositories
const MongoBookRepository = require("./src/infrastructure/repositories/MongoBookRepository");

// Services
const BookService = require("./src/application/services/BookService");

// Controllers
const BookController = require("./src/interfaces/http/controllers/BookController");

const app = express();
app.use(express.json());

// Connect DB
connectDB();

// Inject dependencies
const bookRepo = new MongoBookRepository();
const bookService = new BookService(bookRepo);
const bookController = new BookController(bookService);

// Routes
app.post("/books", bookController.create);
app.get("/books", bookController.getAll);
app.put("/books/:id", bookController.update);
app.delete("/books/:id", bookController.delete);

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/blog_db")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


// ================= Schema & Model =================
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String
});

const Blog = mongoose.model("Blog", blogSchema);


// ================= CRUD APIs =================

// 🟢 CREATE Blog
app.post("/blogs", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.json({ message: "Blog created", blog });
  } catch (err) {
    res.status(500).json(err);
  }
});

// 🔵 READ All Blogs
app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 🟡 UPDATE Blog by ID
app.put("/blogs/:id", async (req, res) => {
  try {
    await Blog.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Blog updated" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// 🔴 DELETE Blog by ID
app.delete("/blogs/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
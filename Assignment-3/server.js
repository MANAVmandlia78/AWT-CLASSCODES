const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", 
  database: "student_db"
});


db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});



app.post("/students", (req, res) => {
  const { name, email, course } = req.body;

  const sql = "INSERT INTO students (name, email, course) VALUES (?, ?, ?)";

  db.query(sql, [name, email, course], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.json({
      message: "Student added successfully",
      id: result.insertId
    });
  });
});



app.get("/students", (req, res) => {
  const sql = "SELECT * FROM students";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.json(results);
  });
});



app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, course } = req.body;

  const sql = "UPDATE students SET name=?, email=?, course=? WHERE id=?";

  db.query(sql, [name, email, course, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.json({ message: "Student updated successfully" });
  });
});



app.delete("/students/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM students WHERE id=?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.json({ message: "Student deleted successfully" });
  });
});


// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
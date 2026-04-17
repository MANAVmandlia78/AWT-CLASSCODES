const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Student = require("./models/Student");

const app = express();
app.use(cors());
app.use(express.json());

/* ================= DB CONNECTION ================= */
mongoose.connect("mongodb://127.0.0.1:27017/restDB")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

/* ================= ROUTES ================= */

// ➕ CREATE
app.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();

    res.status(201).json({
      success: true,
      data: student,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 📄 READ ALL
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();

    res.json({
      success: true,
      data: students,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 📄 READ SINGLE
app.get("/students/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✏️ UPDATE
app.put("/students/:id", async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ❌ DELETE
app.delete("/students/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);

    res.json({ message: "Student deleted ✅" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ================= SERVER ================= */
app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});
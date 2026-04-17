const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

/* ================= SAMPLE DATA ================= */
const jobs = [
  { id: 1, title: "Frontend Developer", location: "Ahmedabad", salary: 30000 },
  { id: 2, title: "Backend Developer", location: "Rajkot", salary: 40000 },
  { id: 3, title: "Full Stack Developer", location: "Surat", salary: 50000 },
  { id: 4, title: "React Developer", location: "Rajkot", salary: 35000 },
];

/* ================= GET + SEARCH + FILTER ================= */
app.get("/jobs", (req, res) => {
  try {
    let result = jobs;

    const { title, location, minSalary } = req.query;

    // 🔍 Search by title
    if (title) {
      result = result.filter(job =>
        job.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    // 📍 Filter by location
    if (location) {
      result = result.filter(job =>
        job.location.toLowerCase() === location.toLowerCase()
      );
    }

    // 💰 Filter by salary
    if (minSalary) {
      result = result.filter(job =>
        job.salary >= Number(minSalary)
      );
    }

    res.json({
      success: true,
      count: result.length,
      data: result,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

/* ================= SERVER ================= */
app.listen(5000, () => {
  console.log("Job API running on port 5000 🚀");
});
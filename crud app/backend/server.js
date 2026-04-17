const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();

app.use(cors());
app.use(bodyParser.json());

/* ================= GLOBAL ERROR HANDLER ================= */
const handleError = (res, err, message = "Server Error") => {
  console.error(err);
  return res.status(500).json({
    success: false,
    message,
    error: err.message,
  });
};

/* ================= CREATE ================= */
app.post("/add", (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    const sql = "INSERT INTO users (name) VALUES (?)";

    db.query(sql, [name], (err, result) => {
      if (err) return handleError(res, err, "Failed to add user");

      res.status(201).json({
        success: true,
        message: "User Added ✅",
      });
    });
  } catch (error) {
    handleError(res, error);
  }
});

/* ================= READ ================= */
app.get("/users", (req, res) => {
  try {
    const sql = "SELECT * FROM users";

    db.query(sql, (err, result) => {
      if (err) return handleError(res, err, "Failed to fetch users");

      res.status(200).json({
        success: true,
        data: result,
      });
    });
  } catch (error) {
    handleError(res, error);
  }
});

/* ================= DELETE ================= */
app.delete("/delete/:id", (req, res) => {
  try {
    const { id } = req.params;

    const sql = "DELETE FROM users WHERE id=?";

    db.query(sql, [id], (err, result) => {
      if (err) return handleError(res, err, "Delete failed");

      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      res.json({
        success: true,
        message: "User Deleted ✅",
      });
    });
  } catch (error) {
    handleError(res, error);
  }
});

/* ================= UPDATE ================= */
app.put("/update/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    const sql = "UPDATE users SET name=? WHERE id=?";

    db.query(sql, [name, id], (err, result) => {
      if (err) return handleError(res, err, "Update failed");

      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      res.json({
        success: true,
        message: "User Updated ✅",
      });
    });
  } catch (error) {
    handleError(res, error);
  }
});

/* ================= SERVER ================= */
app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});
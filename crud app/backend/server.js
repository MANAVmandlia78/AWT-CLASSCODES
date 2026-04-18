const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

require("./db");
const User = require("./models/User");

const app = express();

app.use(cors());
app.use(bodyParser.json());

/* ================= ERROR HANDLER ================= */
const handleError = (res, err, message = "Server Error") => {
  console.error(err);
  return res.status(500).json({
    success: false,
    message,
    error: err.message,
  });
};

/* ================= CREATE ================= */
app.post("/add", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    const user = new User({ name });
    await user.save();

    res.status(201).json({
      success: true,
      message: "User Added ✅",
      data: user,
    });

  } catch (error) {
    handleError(res, error);
  }
});

/* ================= READ ================= */
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();

    res.json({
      success: true,
      data: users,
    });

  } catch (error) {
    handleError(res, error);
  }
});

/* ================= DELETE ================= */
app.delete("/delete/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "User Deleted ✅",
    });

  } catch (error) {
    handleError(res, error);
  }
});

/* ================= UPDATE ================= */
app.put("/update/:id", async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "User Updated ✅",
      data: user,
    });

  } catch (error) {
    handleError(res, error);
  }
});

/* ================= SERVER ================= */
app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});
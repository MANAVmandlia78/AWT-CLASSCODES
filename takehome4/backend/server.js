require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middlewares/auth");
const roleMiddleware = require("./middlewares/role");

const app = express();

// ================= SECURITY =================

// Helmet (secure headers)
app.use(helmet());

// XSS Protection
app.use(xss());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// CORS
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// Body parser
app.use(express.json());

// ================= DB =================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ================= ROUTES =================

// Public route
app.get("/", (req, res) => {
  res.send("API running");
});

// Protected route
app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: "User Dashboard", user: req.user });
});

app.post("/login", (req, res) => {
  const { email, role } = req.body;

  // Dummy user (for testing)
  const user = { email, role };

  const token = jwt.sign(user, "secret123", { expiresIn: "1h" });

  res.json({ token, role });
});

// Admin only route
app.get("/admin", authMiddleware, roleMiddleware("librarian"), (req, res) => {
  res.json({ message: "Admin Panel" });
});

// ================= SERVER =================
app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port " + process.env.PORT);
});
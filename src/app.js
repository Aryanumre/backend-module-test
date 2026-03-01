const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/book.routes");

const authRoutes = require("./routes/auth.routes");
const errorHandler = require("./middleware/error.middleware");

dotenv.config();
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Routes
app.use("/api/users", authRoutes);
app.use("/api/books", bookRoutes);

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running...",
  });
});

// Error handling middleware (ALWAYS LAST)
app.use(errorHandler);

module.exports = app;

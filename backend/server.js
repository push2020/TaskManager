require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware to handle CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET,POST,PUT,DELETE,OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//Middleware
app.use(express.json());

//Route for the API
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/tasks", taskRoutes);
// app.use("/api/reports", reportRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is healthy" });
});

// Serve static files from the React app
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";
dotenv.config();
const PORT = "4000";
const app = express();
app.use(express.json());
try {
  mongoose.connect(process.env.MONGO_URL);
  console.log("connected successfully");
}
catch (err) {
  console.log("Database connection error: " + err);
}

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use("/backend/user", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
dotenv.config();
try {
  mongoose.connect(process.env.MONGO_URL);
  console.log("connected successfully");
} catch (err) {
  console.log("Database connection error: " + err);
}
const app = express();

const PORT = "4000";

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use("/backend/user", userRouter);

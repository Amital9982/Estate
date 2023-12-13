import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
try {
  mongoose.connect(process.env.MONGO_URL);
  console.log("connected successfully");
} catch (err) {
  console.log("Database connection error: " + err);
}
const app = express();

const PORT = "4000";
app.use("/", (req, res) => {
  res.send("hello from the server");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  console.log("Server is runnig at", PORT);
});

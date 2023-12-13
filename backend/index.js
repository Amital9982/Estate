import express from "express";
const app = express();
const PORT = "3000";
app.use("/", (req, res) => {
  res.send("hello from the server");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  console.log("Server is runnig at", PORT);
});

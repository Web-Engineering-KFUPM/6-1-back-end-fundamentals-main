const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the back-end server");
});

app.get("/about", (req, res) => {
  res.send("This is the about route");
});

app.get("/student", (req, res) => {
  res.json({
    name: "Aisha",
    major: "Computer Science"
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
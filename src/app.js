const express = require("express");
const welcomeRoutes = require("./routes/welcomeRoutes");

const app = express();

app.use(express.json());
app.use("/welcome", welcomeRoutes);

app.get("/", (req, res) => {
  res.send("Bandhans backend API is running");
});

module.exports = app;
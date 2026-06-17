const express = require("express");
const recommendRoutes = require("./routes/recommend.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Car API is running 🚗");
});

app.use("/api/recommend", recommendRoutes);

module.exports = app;
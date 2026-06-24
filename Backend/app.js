require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const MongoStore = require("connect-mongo").default;
const recommendRoutes = require("./routes/recommend.routes");
const authRoutes = require("./routes/auth.routes");
const carsRoutes = require("./routes/cars.routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ //store session in MongoDB
    mongoUrl: process.env.MONGO_URI
  }),
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 
  }
}));

app.get("/", (req, res) => {
  res.send("Car API is running 🚗");
});

app.use("/api/recommend", recommendRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cars", carsRoutes);

module.exports = app;
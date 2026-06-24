require("dotenv").config();
const mongoose = require("mongoose");
const Cars = require("../../models/Cars");


const cars = [
 
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to MongoDB");

    await Cars.deleteMany({});

    await Cars.insertMany(cars);

    console.log("Cars inserted successfully");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
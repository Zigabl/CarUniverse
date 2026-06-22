require("dotenv").config();
const mongoose = require("mongoose");
const Cars = require("../../models/Cars");


const cars = [
  {
    brand: "Toyota",
    model: "Corolla",
    price: 20000,
    fuelType: "petrol",
    transmission: "automatic",
    usage: "city",
    reliability: 9,
    maintenanceCost: 7
  },
  {
    brand: "Volkswagen",
    model: "Golf",
    price: 18000,
    fuelType: "diesel",
    transmission: "manual",
    usage: "highway",
    reliability: 8,
    maintenanceCost: 6
  },
  {
    brand: "BMW",
    model: "320d",
    price: 28000,
    fuelType: "diesel",
    transmission: "automatic",
    usage: "highway",
    reliability: 7,
    maintenanceCost: 5
  },
  {
    brand: "Skoda",
    model: "Octavia",
    price: 22000,
    fuelType: "diesel",
    transmission: "manual",
    usage: "mixed",
    reliability: 9,
    maintenanceCost: 7
  }
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
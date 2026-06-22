const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  brand: String,
  model: String,
  price: Number,
  fuelType: String, 
  transmission: String, 
  usage: String, 
  reliability: Number, 
  maintenanceCost: Number,
  description: String,
});

module.exports = mongoose.model("Cars", carSchema);
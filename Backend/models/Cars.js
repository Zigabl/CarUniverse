const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: String,
  registration: String,
  milage: Number,
  fuelType: String, 
  transmission: String,
  price: Number
});

module.exports = mongoose.model("Cars", carSchema);
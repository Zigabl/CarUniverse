const Car = require("../models/Cars");

function scoreCar(car, prefs) {
  let score = 0;

  if (car.price <= prefs.price) score += 40;

  if (car.fuelType === prefs.fuelType) score += 20;

  if (car.transmission === prefs.transmissionType) score += 15;

  return score;
}

async function getRecommendations(prefs) {
  const cars = await Car.find();

  const scored = cars.map(car => ({
    car,
    score: scoreCar(car, prefs)
  }));

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, 10); //return only first 10 results
}

module.exports = {
  getRecommendations
};
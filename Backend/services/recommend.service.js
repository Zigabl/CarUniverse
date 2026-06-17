const Car = require("../models/Cars");

function scoreCar(car, prefs) {
  let score = 0;

  if (car.price <= prefs.budget) score += 40;

  if (car.fuelType === prefs.fuelType) score += 20;

  if (car.transmission === prefs.transmission) score += 15;

  if (car.usage === prefs.usage) score += 15;

  score += car.reliability * 2;

  score += (10 - car.maintenanceCost) * 2;

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
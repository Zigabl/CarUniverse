const Car = require("../models/Cars");

async function getDetails(id) {
    console.log('getDetails was called')
    const car = await Car.findById(id);
    if (car)
    {
      console.log('car was found', car);
    }
    return car;
}

module.exports = {
  getDetails
};
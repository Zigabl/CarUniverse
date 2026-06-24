const carDetailService = require("../services/carDetail.service");

async function getCarDetail(req, res) {
  try {

    if (!req.params.id) 
    {
      console.log("params missing")
      return res.status(400).json({
        success: false,
        message: "params missing",
      });
    }

    const car = await carDetailService.getDetails(req.params.id);

    if (!car)
    {
      console.log("no car found")
      return res.status(400).json({
        success: false,
        message: "no car found",
      });
    }

    console.log('returned car: ', car);

    res.json({
      success: true,
      car
    });


  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
}

module.exports = {
  getCarDetail
};
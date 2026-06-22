const recommendService = require("../services/recommend.service");

async function recommend(req, res) {
  try {
    const prefs = req.body;
    
    if (!prefs || Object.keys(prefs).length === 0) //because sometimes prefs might be empty not null
    {
      console.log("prefs missing")
      return res.status(400).json({
        success: false,
        message: "prefs missing",
      });
    }

    console.log('Received req body: ', req.body);

    const results = await recommendService.getRecommendations(prefs);

    console.log('returned recommended cars: ', results);

    res.json({
      success: true,
      results
    });


  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
}

module.exports = {
  recommend
};
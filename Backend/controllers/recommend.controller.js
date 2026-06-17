const recommendService = require("../services/recommend.service");

async function recommend(req, res) {
  try {
    const prefs = req.body;

    const results = await recommendService.getRecommendations(prefs);

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
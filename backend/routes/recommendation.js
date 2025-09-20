const express = require("express");
const router = express.Router();
const recommender = require("../services/recommender");

router.get("/:buyerId", async (req, res) => {
  try {
    const { buyerId } = req.params;
    const recommendations = await recommender.getRecommendations(buyerId);
    res.json({ success: true, recommendations });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;

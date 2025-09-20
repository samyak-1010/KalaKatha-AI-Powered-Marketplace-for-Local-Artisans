const express = require("express");
const router = express.Router();
const vertexService = require("../services/vertexService");
const db = require("../config/firestore");

router.post("/add", async (req, res) => {
  try {
    const { artisanId, rawText } = req.body;
    const description = await vertexService.generateStory(rawText);

    await db.collection("products").add({
      artisanId,
      rawText,
      description,
      createdAt: new Date()
    });

    res.json({ success: true, description });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

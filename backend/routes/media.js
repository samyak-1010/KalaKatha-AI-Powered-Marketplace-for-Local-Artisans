const express = require("express");
const router = express.Router();
const imagenService = require("../services/imagenService");

router.post("/generate", async (req, res) => {
  try {
    const { description } = req.body;
    const { posterUrl, videoUrl } = await imagenService.generateMedia(description);
    res.json({ success: true, posterUrl, videoUrl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

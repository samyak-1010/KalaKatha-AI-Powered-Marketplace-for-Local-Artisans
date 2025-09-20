const express = require("express");
const router = express.Router();
const speechService = require("../services/speechService");
const translationService = require("../services/translationService");
const db = require("../config/firestore");

router.post("/onboard", async (req, res) => {
  try {
    const { audioBase64, language } = req.body;

    const text = await speechService.transcribe(audioBase64, language);
    const englishText = await translationService.translate(text, "en");

    const artisanRef = db.collection("artisans").doc();
    await artisanRef.set({ original: text, english: englishText, createdAt: new Date() });

    res.json({ success: true, artisanId: artisanRef.id, description: englishText });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  createDailyEmotion,
  getAllDailyEmotions,
  getDailyEmotionByDate,
  updateDailyEmotionByDate,
  deleteDailyEmotionByDate,
} = require("../controllers/dailyEmotionController");

router.get("/", getAllDailyEmotions);
router.post("/", createDailyEmotion);

router.get("/date", getDailyEmotionByDate);
router.patch("/date", updateDailyEmotionByDate);
router.delete("/date", deleteDailyEmotionByDate);

module.exports = router;

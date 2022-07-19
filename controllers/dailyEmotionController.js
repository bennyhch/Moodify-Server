const DailyEmotion = require("../models/DailyEmotion");

const createDailyEmotion = async (req, res) => {
  res.send("create daily emotion");
};

const getAllDailyEmotions = async (req, res) => {
  res.send("get all emotions");
};

const getDailyEmotionByDate = async (req, res) => {
  res.send("get Daily emotion By date");
};

const updateDailyEmotionByDate = async (req, res) => {
  res.send("update daily emotion");
};

const deleteDailyEmotionByDate = async (req, res) => {
  res.send("delete daily emotion");
};

module.exports = {
  createDailyEmotion,
  getAllDailyEmotions,
  getDailyEmotionByDate,
  updateDailyEmotionByDate,
  deleteDailyEmotionByDate,
};

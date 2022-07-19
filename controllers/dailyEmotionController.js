const DailyEmotion = require("../models/DailyEmotion");
const CustomError = require("../errors");
const { StatusCodes } = require("http-status-codes");

const createDailyEmotion = async (req, res) => {
  const { day } = req.body;
  if (!day) {
    throw new CustomError.BadRequestError('Missing info for "day"');
  }
  req.body.user = req.user.userId;
  const dailyEmotion = await DailyEmotion.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ dailyEmotion });
};

const getAllDailyEmotions = async (req, res) => {
  const { userId } = req.user;
  const dailyEmotions = await DailyEmotion.find({ user: userId }).sort({
    day: -1,
  });
  res.status(StatusCodes.OK).json({ dailyEmotions });
};

const getDailyEmotionByDate = async (req, res) => {
  const { day } = req.body;
  const { userId } = req.user;
  const dailyEmotion = await DailyEmotion.find({ user: userId, day });
  if (dailyEmotion.length < 1) {
    throw new CustomError.BadRequestError("No entry for this particular date");
  }
  res.status(StatusCodes.OK).json({ dailyEmotion });
};

const updateDailyEmotionByDate = async (req, res) => {
  const { day } = req.body;
  const { userId } = req.user;
  const dailyEmotion = await DailyEmotion.findOneAndUpdate(
    { user: userId, day },
    req.body,
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.OK).json({ dailyEmotion });
};

const deleteDailyEmotionByDate = async (req, res) => {
  const { day } = req.body;
  const { userId } = req.user;
  const dailyEmotion = await DailyEmotion.findOneAndDelete({
    user: userId,
    day,
  });
  if (!dailyEmotion) {
    throw new CustomError.BadRequestError("No entry for this particular date");
  }
  res.status(StatusCodes.OK).json({ msg: "Entry successfully deleted" });
};

module.exports = {
  createDailyEmotion,
  getAllDailyEmotions,
  getDailyEmotionByDate,
  updateDailyEmotionByDate,
  deleteDailyEmotionByDate,
};

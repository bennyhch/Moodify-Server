const { StatusCodes } = require("http-status-codes");
const Topic = require("../models/TopicForum");
const CustomError = require("../errors");
const checkPermission = require("../utils/checkPermission");

const getAllTopic = async (req, res) => {
  const topics = await Topic.find({}).populate({
    path: "author",
    select: "username email",
  });
  res.status(StatusCodes.OK).json({ topics, count: topics.length });
};

const createOneTopic = async (req, res) => {
  req.body.author = req.user.userId;
  const topic = await Topic.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ topic });
};

const getOneTopic = async (req, res) => {
  const { topicId } = req.params;
  const topic = await Topic.find({ _id: topicId }).populate({
    path: "author",
    select: "username email",
  });
  if (topic.length < 1) {
    throw new CustomError.BadRequestError("No topic with the relevant topicId");
  }
  res.status(StatusCodes.OK).json({ topic });
};

const updateOneTopic = async (req, res) => {
  const { topicId } = req.params;
  const topicFromDB = await Topic.findOne({ _id: topicId });
  if (!topicFromDB) {
    throw new CustomError.BadRequestError("No topic with the relevant topicId");
  }
  checkPermission(topicFromDB.author, req.user.userId);
  const topic = await Topic.findOneAndUpdate({ _id: topicId }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ topic });
};

const deleteOneTopic = async (req, res) => {
  const { topicId } = req.params;
  const topicFromDB = await Topic.findOne({ _id: topicId });
  if (!topicFromDB) {
    throw new CustomError.BadRequestError("No topic with the relevant topicId");
  }
  checkPermission(topicFromDB.author, req.user.userId);
  const topic = await Topic.findOneAndDelete({ _id: topicId });
  res.status(StatusCodes.OK).json({ topic, msg: "Topic successfully deleted" });
};

module.exports = {
  getAllTopic,
  createOneTopic,
  getOneTopic,
  updateOneTopic,
  deleteOneTopic,
};

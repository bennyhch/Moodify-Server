const Replies = require("../models/Replies");
const Topic = require("../models/TopicForum");
const CustomError = require("../errors");
const { StatusCodes } = require("http-status-codes");
const checkPermission = require("../utils/checkPermission");
// get all replies by author ID

const getAllReplies = async (req, res) => {
  const replies = await Replies.find({})
    .populate({
      path: "author",
      select: "username email",
    })
    .populate({
      path: "topic",
      select: "title content ",
    });
  if (replies.length < 1) {
    throw new CustomError.NotFoundError("No replies existed in the DB");
  }
  res.status(StatusCodes.OK).json({ replies, count: replies.length });
};

const createOneReply = async (req, res) => {
  const { topic: topicId } = req.body;
  const isValidTopic = await Topic.find({ _id: topicId });
  if (isValidTopic.length < 1) {
    throw new CustomError.NotFoundError("No such topic existed in the DB");
  }
  req.body.author = req.user.userId;
  const reply = await Replies.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ reply });
};

const getAllRepliesByTopicId = async (req, res) => {
  const { topicId } = req.params;
  const isValidTopic = await Topic.findOne({ _id: topicId });
  if (!isValidTopic) {
    throw new CustomError.NotFoundError("No such topic existed in the DB");
  }
  const replies = await Replies.find({ topic: topicId });
  if (replies.length < 1) {
    throw new CustomError.NotFoundError("No such topic existed in the DB");
  }
  res.status(StatusCodes.OK).json({ replies, count: replies.length });
};

const getOneReplyByRepliesId = async (req, res) => {
  const { repliesId } = req.params;
  const reply = await Replies.findOne({ _id: repliesId })
    .populate({
      path: "author",
      select: "username email",
    })
    .populate({
      path: "topic",
      select: "title content ",
    });
  if (!reply) {
    throw new CustomError.NotFoundError("not such reply in the DB");
  }
  res.status(StatusCodes.OK).json({ reply });
};

const updateOneReply = async (req, res) => {
  const { repliesId } = req.params;
  const isReplyValid = await Replies.findOne({ _id: repliesId });
  if (!isReplyValid) {
    throw new CustomError.NotFoundError("Such reply does not exist in the DB");
  }
  checkPermission(isReplyValid.author, req.user.userId);
  const reply = await Replies.findOneAndUpdate({ _id: repliesId }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ reply });
};

const deleteOneReply = async (req, res) => {
  const { repliesId } = req.params;
  const isReplyValid = await Replies.findOne({ _id: repliesId });
  if (!isReplyValid) {
    throw new CustomError.NotFoundError("Such reply does not exist in the DB");
  }
  checkPermission(isReplyValid.author, req.user.userId);
  // await remove ??
  const reply = await Replies.findOneAndDelete({ _id: repliesId });
  res.status(StatusCodes.OK).json({ msg: "Reply successfully deleted" });
};

module.exports = {
  getAllReplies,
  getAllRepliesByTopicId,
  getOneReplyByRepliesId,
  updateOneReply,
  deleteOneReply,
  createOneReply,
};

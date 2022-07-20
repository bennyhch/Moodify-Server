const Replies = require("../models/Replies");

const getAllReplies = async (req, res) => {
  res.send("get all replies ");
};

const createOneReply = async (req, res) => {
  res.send("create one reply");
};

const getAllRepliesByTopicId = async (req, res) => {
  res.send("get all replies by topic id");
};

const getOneReplyByRepliesId = async (req, res) => {
  res.send("get one reply by reply id");
};

const updateOneReply = async (req, res) => {
  res.send("update one reply");
};

const deleteOneReply = async (req, res) => {
  res.send("delete one reply");
};

module.exports = {
  getAllReplies,
  getAllRepliesByTopicId,
  getOneReplyByRepliesId,
  updateOneReply,
  deleteOneReply,
  createOneReply,
};

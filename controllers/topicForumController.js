const Topic = require("../models/TopicForum");

const getAllTopic = async (req, res) => {
  res.send("get all topics");
};

const createOneTopic = async (req, res) => {
  res.send("create one topic");
};

const getOneTopic = async (req, res) => {
  res.send("get one topic ");
};

const updateOneTopic = async (req, res) => {
  res.send("update one topic");
};

const deleteOneTopic = async (req, res) => {
  res.send("delete one topic ");
};

module.exports = {
  getAllTopic,
  createOneTopic,
  getOneTopic,
  updateOneTopic,
  deleteOneTopic,
};

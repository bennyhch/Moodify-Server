const Event = require("../models/Event");

const getAllEvents = async (req, res) => {
  res.send("get all events");
};

const createOneEvent = async (req, res) => {
  res.send("create one event");
};

const getOneEvent = async (req, res) => {
  res.send("get one event");
};

const updateOneEvent = async (req, res) => {
  res.send("update one event");
};

const deleteOneEvent = async (req, res) => {
  res.send("delete one event");
};

module.exports = {
  getAllEvents,
  getOneEvent,
  createOneEvent,
  updateOneEvent,
  deleteOneEvent,
};

const Event = require("../models/Event");
const CustomeError = require("../errors");
const { StatusCodes } = require("http-status-codes");

const getAllEvents = async (req, res) => {
  const { userId } = req.user;
  const events = await Event.find({ user: userId });
  res.status(StatusCodes.OK).json({ events, counts: events.length });
};

const createOneEvent = async (req, res) => {
  const { emotions, incident, thought, behavior, timeOfEvent } = req.body;
  if (!emotions || !incident || !thought || !behavior || !timeOfEvent) {
    throw new CustomeError.BadRequestError(
      "Please provide emotion, incident, thougth, behavior, and time of the event"
    );
  }
  req.body.user = req.user.userId;
  const event = await Event.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ event });
};

const getOneEvent = async (req, res) => {
  const { eventId } = req.params;
  const event = await Event.findOne({ _id: eventId });
  if (!event) {
    throw new CustomeError.BadRequestError("No product with the relevant id");
  }
  res.status(StatusCodes.OK).json({ event });
};

const updateOneEvent = async (req, res) => {
  const { eventId } = req.params;
  const event = await Event.findOneAndUpdate({ _id: eventId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!event) {
    throw new CustomeError.BadRequestError("No product with the relevant id");
  }
  res.status(StatusCodes.OK).json({ event });
};

const deleteOneEvent = async (req, res) => {
  const { eventId } = req.params;
  const event = await Event.deleteOne({ _id: eventId });
  if (!event) {
    throw new CustomeError.BadRequestError("No product with the relevant id");
  }
  res.status(StatusCodes.OK).json({ msg: "Event successfully deleted" });
};

module.exports = {
  getAllEvents,
  getOneEvent,
  createOneEvent,
  updateOneEvent,
  deleteOneEvent,
};

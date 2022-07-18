const { StatusCodes } = require("http-status-codes");
const Appointment = require("../models/Appointment");

const getAllAppointment = async (req, res) => {};

const createOneAppointment = async (req, res) => {
  // some checking for the data input?
  req.body.user = req.user;
  console.log("req.body", req.body);
  const appointment = await Appointment.create({
    ...req.body,
    user: req.body.user.userId,
  });
  res.status(StatusCodes.CREATED).json({ appointment });
};

const getOneAppointment = async (req, res) => {
  res.send("get one appintment ");
};

const updateOneAppointment = async (req, res) => {
  res.send("update Appointment");
};

const deleteOneAppointment = async (req, res) => {
  res.send("delete one appointment");
};

module.exports = {
  getAllAppointment,
  createOneAppointment,
  getOneAppointment,
  updateOneAppointment,
  deleteOneAppointment,
};

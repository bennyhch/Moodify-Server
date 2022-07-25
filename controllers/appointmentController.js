const { StatusCodes } = require("http-status-codes");
const Appointment = require("../models/Appointment");
const CustomError = require("../errors");
const checkPermission = require("../utils/checkPermission");

const getAllAppointment = async (req, res) => {
  const { userId } = req.user;
  const appointments = await Appointment.find({ user: userId }).sort({
    dateOfAppointment: 1,
  });
  if (appointments.length < 1) {
    throw new CustomError.BadRequestError("No appointments added");
  }

  res.status(StatusCodes.OK).json({ appointments });
};

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
  const { appointmentId } = req.params;
  const appointment = await Appointment.findOne({ _id: appointmentId });
  if (!appointment) {
    throw new CustomError.BadRequestError("Invalid appointmentId");
  }
  checkPermission(appointment.user, req.user.userId);
  // if (appointment.user.toString() !== req.user.userId) {
  //   throw new CustomError.UnauthorizedError("Unauthorized route");
  // }
  res.status(StatusCodes.OK).json({ appointment });
};

const updateOneAppointment = async (req, res) => {
  const { appointmentId } = req.params;
  const appointment = await Appointment.findOne({ _id: appointmentId });
  if (!appointment) {
    throw new CustomError.BadRequestError("Invalid appointmentId");
  }
  checkPermission(appointment.user, req.user.userId);
  const { doctorName, dateOfAppointment, location, attended } = req.body;
  const updatedAppointment = await Appointment.findOneAndUpdate(
    { _id: appointmentId },
    { doctorName, dateOfAppointment, location, attended },
    { new: true, runValidators: true }
  );
  res.status(StatusCodes.OK).json({ updatedAppointment });
};

const deleteOneAppointment = async (req, res) => {
  const { appointmentId } = req.params;
  const appointment = await Appointment.findOne({ _id: appointmentId });
  if (!appointment) {
    throw new CustomError.BadRequestError("Invalid appointmentId");
  }
  checkPermission(appointment.user, req.user.userId);
  const appointmentToDelete = await Appointment.deleteOne({
    _id: appointmentId,
  });
  res
    .status(StatusCodes.OK)
    .json({ msg: "Appointment successfully deleted", appointmentToDelete });
};

module.exports = {
  getAllAppointment,
  createOneAppointment,
  getOneAppointment,
  updateOneAppointment,
  deleteOneAppointment,
};

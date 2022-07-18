const appointment = require("../models/Appointment");

const getAllAppointment = async (req, res) => {
  res.send("get all appointment");
};

const createOneAppointment = async (req, res) => {
  res.send("create one appointment");
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

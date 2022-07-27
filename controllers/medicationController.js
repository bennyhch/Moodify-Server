const Medication = require("../models/Medication");
const CustomError = require("../errors");
const { StatusCodes } = require("http-status-codes");
const checkPermission = require("../utils/checkPermission");

const getAllMed = async (req, res) => {
  const { userId } = req.user;
  const medication = await Medication.find({ user: userId });
  res.status(StatusCodes.OK).json({ medication, counts: medication.length });
};

const createMed = async (req, res) => {
  const { medicationName } = req.body;
  if (!medicationName) {
    throw new CustomError.BadRequestError(
      "Please provide the name of the medication"
    );
  }
  req.body.user = req.user.userId;
  const medication = await Medication.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ medication });
};

const getOneMed = async (req, res) => {
  const { medId } = req.params;
  const medication = await Medication.findOne({ _id: medId });
  if (!medication) {
    throw new CustomError.BadRequestError(
      "No medication with the relevant medId"
    );
  }
  checkPermission(medication.user, req.user.userId);
  res.status(StatusCodes.OK).json({ medication });
};

const updateOneMed = async (req, res) => {
  const { medId } = req.params;
  const medFromDB = await Medication.findOne({ _id: medId });
  if (!medFromDB) {
    throw new CustomError.BadRequestError(
      "No medication with the relevant medID"
    );
  }
  checkPermission(medFromDB.user, req.user.userId);
  const medication = await Medication.findOneAndUpdate(
    { _id: medId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(StatusCodes.OK).json({ medication });
};

const deleteMed = async (req, res) => {
  const { medId } = req.params;
  const medFromDB = await Medication.findOne({ _id: medId });
  if (!medFromDB) {
    throw new CustomError.BadRequestError(
      "No Medication with the relevant medId"
    );
  }
  checkPermission(medFromDB.user, req.user.userId);
  const medication = await Medication.findOneAndDelete({ _id: medId });
  res
    .status(StatusCodes.OK)
    .json({ medication, msg: "Medication successfully deleted" });
};

module.exports = { getAllMed, createMed, getOneMed, updateOneMed, deleteMed };

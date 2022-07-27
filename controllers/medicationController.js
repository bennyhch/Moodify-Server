const Medication = require("../models/Medication");

const getAllMed = async (req, res) => {
  res.send("get all med");
};

const createMed = async (req, res) => {
  res.send("create med");
};

const getOneMed = async (req, res) => {
  res.send("get one med by ID");
};

const updateOneMed = async (req, res) => {
  res.send("update med");
};

const deleteMed = async (req, res) => {
  res.send("delete medication");
};

module.exports = { getAllMed, createMed, getOneMed, updateOneMed, deleteMed };

const express = require("express");
const router = express.Router();
const {
  getAllAppointment,
  getOneAppointment,
  updateOneAppointment,
  deleteOneAppointment,
  createOneAppointment,
} = require("../controllers/appointmentController");

router.get("/", getAllAppointment);
router.post("/", createOneAppointment);

router.get("/:appointmentID", getOneAppointment);
router.patch("/:appintmentID", updateOneAppointment);
router.delete("/:appointmentID", deleteOneAppointment);

module.exports = router;

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

router.get("/:appointmentId", getOneAppointment);
router.patch("/:appointmentId", updateOneAppointment);
router.delete("/:appointmentId", deleteOneAppointment);

module.exports = router;

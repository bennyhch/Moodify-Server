const express = require("express");
const router = express.Router();

const {
  getAllEvents,
  getOneEvent,
  createOneEvent,
  updateOneEvent,
  deleteOneEvent,
} = require("../controllers/eventController");

router.get("/", getAllEvents);
router.post("/", createOneEvent);

router.get("/:eventId", getOneEvent);
router.patch("/:eventId", updateOneEvent);
router.delete("/:eventId", deleteOneEvent);

module.exports = router;

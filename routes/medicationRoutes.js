const express = require("express");
const router = express.Router();

const {
  getAllMed,
  createMed,
  getOneMed,
  updateOneMed,
  deleteMed,
} = require("../controllers/medicationController");

router.get("/", getAllMed);
router.post("/", createMed);

router.get("/:medId", getOneMed);
router.patch("/:medId", updateOneMed);
router.delete("/:medId", deleteMed);

module.exports = router;

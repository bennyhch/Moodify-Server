const express = require("express");
const router = express.Router();

const {
  getAllTopic,
  createOneTopic,
  getOneTopic,
  updateOneTopic,
  deleteOneTopic,
} = require("../controllers/topicForumController");

router.get("/", getAllTopic);
router.post("/", createOneTopic);

router.get("/:topicId", getOneTopic);
router.patch("/:topicId", updateOneTopic);
router.delete("/:topicId", deleteOneTopic);

module.exports = router;

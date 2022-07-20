const express = require("express");
const router = express.Router();
const {
  getAllReplies,
  getAllRepliesByTopicId,
  getOneReplyByRepliesId,
  updateOneReply,
  deleteOneReply,
  createOneReply,
} = require("../controllers/repliesController");

router.get("/", getAllReplies);
router.post("/", createOneReply);

router.get("/topic/:topicId", getAllRepliesByTopicId);

router.get("/:repliesId", getOneReplyByRepliesId);
router.patch("/:repliesId", updateOneReply);
router.delete("/:repliesId", deleteOneReply);

module.exports = router;

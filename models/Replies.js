const mongoose = require("mongoose");
const { Schema } = mongoose;

const RepliesSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, "Please provide content"],
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    topic: {
      type: mongoose.Types.ObjectId,
      ref: "TopicForum",
      required: true,
    },
    isReported: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Replies", RepliesSchema);

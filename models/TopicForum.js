const mongoose = require("mongoose");
const { Schema } = mongoose;

const TopicForumSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide title"],
      maxlength: 150,
    },
    content: {
      type: String,
      required: [true, "Please provide content"],
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    numOfHeart: {
      type: Number,
      min: 0,
      default: 0,
    },
    isReported: {
      default: false,
      type: Boolean,
    },
    // reviews?? virtual ??
  },
  { timestamps: true }
);

module.exports = mongoose.model("TopicForum", TopicForumSchema);

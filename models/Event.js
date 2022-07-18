const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    emotions: {
      type: String,
      enum: ["happy", "sad", "anger", "fear", " disgust"],
      required: [true, "Please select an emotion"],
    },
    event: {
      type: String,
      required: [true, "Please provide an triggering event"],
    },
    thought: {
      type: String,
      required: [true, "Please provide a thought related to the evnet"],
    },
    behavior: {
      type: String,
      required: [true, "Please provide a behavior related to the event"],
    },
    // should i keep physical sensation?
    physicalSensation: {
      type: String,
    },
    timeOfEvent: {
      type: Date,
      max: new Date(),
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);

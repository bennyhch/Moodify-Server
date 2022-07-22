const mongoose = require("mongoose");
const { Schema } = mongoose;

const EventSchema = new Schema(
  {
    emotions: {
      type: String,
      enum: ["happy", "sad", "anger", "fear", " love"],
      required: [true, "Please select an emotion"],
    },
    incident: {
      type: String,
      required: [true, "Please provide an triggering incident"],
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
      max: new Date().setDate(new Date().getDate() + 1),
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const DailyEmotionSchema = new Schema(
  {
    psychoticSymptoms: {
      type: Boolean,
      required: true,
    },
    panicAttack: {
      type: Boolean,
      required: true,
    },
    hoursOfSleep: {
      type: Number,
      min: 0,
      max: 24,
    },
    depressionExtreme: {
      type: Number,
      min: 0,
      max: 3,
    },
    elevationExtreme: {
      type: Number,
      min: 0,
      max: 3,
    },
    anxietyExtreme: {
      type: Number,
      min: 0,
      max: 3,
    },
    restlessness: {
      type: Number,
      min: 0,
      max: 3,
    },
    irritability: {
      type: Number,
      min: 0,
      max: 3,
    },
    suicidal: {
      type: Number,
      min: 0,
      max: 3,
    },
    day: {
      type: Date,
      required: [true, "Please provide the date relevant for the input"],
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DailyEmotion", DailyEmotionSchema);

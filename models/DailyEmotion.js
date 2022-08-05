const mongoose = require("mongoose");
const { Schema } = mongoose;

const DailyEmotionSchema = new Schema(
  {
    psychoticSymptoms: {
      type: Boolean,
      default: false,
    },
    panicAttack: {
      type: Boolean,
      default: false,
    },
    hoursOfSleep: {
      type: Number,
      min: 0,
      max: 24,
      default: 0,
    },
    depressionExtreme: {
      type: Number,
      min: 0,
      max: 3,
      default: 0,
    },
    elevationExtreme: {
      type: Number,
      min: 0,
      max: 3,
      default: 0,
    },
    anxietyExtreme: {
      type: Number,
      min: 0,
      default: 0,

      max: 3,
    },
    restlessness: {
      type: Number,
      min: 0,
      max: 3,
      default: 0,
    },
    irritability: {
      type: Number,
      min: 0,
      max: 3,
      default: 0,
    },
    suicidal: {
      type: Number,
      min: 0,
      max: 3,
      default: 0,
    },
    day: {
      type: Date,
      required: [true, "Please provide the date relevant for the input"],
      unique: true,
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

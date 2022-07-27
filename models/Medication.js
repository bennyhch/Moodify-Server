const mongoose = require("mongoose");
const { Schema } = mongoose;

const MedicationSchema = new Schema(
  {
    medicationName: {
      type: String,
      required: true,
      maxlength: [200, "Name cannot be more than 200 characaters"],
    },
    dosage: {
      type: Number,
      min: 0,
    },
    units: {
      type: String,
      maxlength: [50, "units cannot be more than 50 characters"],
    },
    frequency: {
      type: String,
      enum: ["Every day", "As needed"],
      default: "As needed",
    },
    timeOfDay: {
      type: String,
      enum: ["am", "mid-day", "pm", "am&pm", "any"],
      default: "any",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Medication", MedicationSchema);

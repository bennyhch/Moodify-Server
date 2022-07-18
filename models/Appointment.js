const mongoose = require("mongoose");
const { Schema } = mongoose;

const AppointmentSchema = new Schema(
  {
    doctorName: {
      type: String,
      maxlength: [100, "Name cannot be more than 100 characters"],
      required: true,
    },
    dateOfAppointment: {
      type: Date,
      min: new Date(),
      required: true,
      // unique??
    },
    location: {
      type: String,
      default: "London",
    },
    // doesn't make sense ?
    attended: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", AppointmentSchema);

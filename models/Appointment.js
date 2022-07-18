const mongoose = require("mongoose");
const { Schema } = mongoose;

const AppointmentSchema = new Schema(
  {
    doctorName: {
      type: String,
      maxlength: [100, "Name cannot be more than 100 characters"],
    },
    dateOfAppointment: {
      type: Date,
      min: new Date(),
    },
    location: {
      type: String,
      default: "London",
    },
    // doesn't make sense ?
    attended: {
      type: Boolean,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Appointment", AppointmentSchema);

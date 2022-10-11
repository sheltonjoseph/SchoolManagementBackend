const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String, required: true },
    rollNo: { type: Number, required: true, unique: true },
    gender: { type: String, required: true },
    dob: { type: String, required: true },
    classId: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);

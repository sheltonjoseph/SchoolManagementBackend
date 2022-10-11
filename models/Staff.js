const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    subjectId:{ type: Array },
    gender:{type:String},
    role:{type: String, required: true},
    isManagingStaff: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Staff", StaffSchema);
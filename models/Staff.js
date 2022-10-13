const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender:{type:String , required: true },
    role:{type: String, required: true},
    isManagingStaff: {
      type: Boolean,
      default: false,
    },
    subjectId:{ type: Array, required: true},
    img:{ type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Staff", StaffSchema);
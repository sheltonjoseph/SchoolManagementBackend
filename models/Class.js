const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema(
  {
    subjectId: { type: Number, required: true },
    staffId: { type: Number, required: true },
    isClassTeacher: {
        type: Boolean,
        default: false,
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Class", ClassSchema);


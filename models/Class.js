const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema(
  {
    subjectId: { type: Number},
    className:{type: String,required:true},
    staffId: { type: Number,},
    isClassTeacher: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Class", ClassSchema);

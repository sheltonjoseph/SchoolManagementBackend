const mongoose = require("mongoose");
const subSchema = new mongoose.Schema({ subId: Number, isClassTeacher: {
  type: Boolean,
  default: false,
},staffId: { type: String,default: ''}});
const ClassSchema = new mongoose.Schema(
  {
    subjectInfo: [subSchema],
    className:{type: String,required:true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Class", ClassSchema);

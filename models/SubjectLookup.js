const mongoose = require("mongoose");

const SubjectLookup = new mongoose.Schema(
  {
    subjectId: { type: Number},
    subName: {type:String},
    subjectOrder: { type: Number}
  },
);

module.exports = mongoose.model("Subjets", SubjectLookup );
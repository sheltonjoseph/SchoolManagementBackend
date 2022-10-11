const Students = require("../models/Student");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const newStudent = new Students(req.body);
  try {
    const savedStudent = await newStudent.save();
    res.status(200).json(savedStudent);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/", async (req, res) => {
    try {
      const students = await Students.find();
      res.status(200).json(students);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;

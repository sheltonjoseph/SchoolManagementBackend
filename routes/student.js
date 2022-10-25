const Students = require("../models/Student");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();

// Add Student
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  console.log(req.body);
  const newStudent = new Students(req.body);
  try {
    const savedStudent = await newStudent.save();
    res.status(200).json(savedStudent);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// Edit Student
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedStudent = await Students.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// delete a student
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Students.findByIdAndDelete(req.params.id);
    res.status(200).json("Student has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// students for specific class
router.get("/class/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const students = await Students.find();
    let specificStudents = [];
    students.forEach((s) => {
      if (s.classId === req.params.id) {
        specificStudents.push(s);
      }
    });
    res.status(200).json(specificStudents);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//get SiNGLE Student

router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all Students

router.get("/", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const students = await Students.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

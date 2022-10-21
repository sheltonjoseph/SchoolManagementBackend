
const Subjets = require("../models/SubjectLookup");
const router = require("express").Router();


// Add Subjects
router.post("/", async (req, res) => {
  console.log(req.body)
  const newSubject = new Subjets(req.body);
  try {
    const savedSubject = await newSubject.save();
    res.status(200).json(savedSubject);
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});



// Get all Subjets

router.get("/",async (req, res) => {
    try {
      const subjects= await Subjets.find();
      res.status(200).json(subjects);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;

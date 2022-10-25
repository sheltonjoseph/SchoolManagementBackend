const Class = require("../models/Class");
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("./verifyToken");
const router = require("express").Router();

// Add NEW CLASS
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newClass = new Class(req.body);
  try {
    const savedClass = await newClass.save();
    res.status(200).json(savedClass);
  } catch (err) {
    res.status(500).json(err);
  }
});

// updateClass
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedClass = await Class.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    console.log(updatedClass);
    res.status(200).json(updatedClass);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//DELETE Class
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Class.findByIdAndDelete(req.params.id);
    res.status(200).json("Class  has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get CLASS Info

router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const getClassInfo = await Class.findById(req.params.id);
    res.status(200).json(getClassInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get  Staffs CLASS

router.get("/staff/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const getClassInfo = await Class.find();
    let specificGrade = [];
    getClassInfo.forEach((sub) => {
      for(let s of sub.subjectInfo){
        if (s.staffId === req.params.id) {
          specificGrade.push(sub);
          break;
        }
      }
    });
    res.status(200).json(specificGrade);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get all Class
router.get("/", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const getAllClass = await Class.find();
    res.status(200).json(getAllClass);
    console.log(getAllClass);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

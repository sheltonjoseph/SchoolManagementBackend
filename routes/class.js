const Class = require("../models/Class");
const { verifyTokenAndAdmin } = require("./verifyToken");
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
    res.status(200).json(updatedClass);
  } catch (err) {
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

router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const getClassInfo = await Class.findById(req.params.id);
    res.status(200).json(getClassInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get CLASS 

// router.get("/find/class/:class", verifyTokenAndAdmin, async (req, res) => {
//     try {
//       const getClass = await Class.findById(req.params.class);
//       res.status(200).json(getClass);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//get all Class
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const getAllClass = await Class.find();
    res.status(200).json(getAllClass);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

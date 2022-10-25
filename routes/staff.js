const Staff = require("../models/Staff");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();

// UPDATESTAFF
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  console.log(req.body)
  try {
    const updatedUser = await Staff.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

//DELETE Staff
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Staff.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get SiNGLE sTAFF

router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    const { password, ...others } = staff._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all staffs
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const staff = await Staff.find();
    res.status(200).json(staff);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

const Staff = require("../models/Staff");
const jwt = require("jsonwebtoken");
const router = require("express").Router();

// register
router.post("/register", async (req, res) => {
  console.log(req.body)
  let body = JSON.parse(req.body.body)
  const newStaff = new Staff(body);

  // const newStaff = new Staff(req.body);
  console.log(newStaff)
  try {
    const savedStaff = await newStaff.save();
    res.status(201).json(savedStaff);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const staff = await Staff.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if(staff) {
      const accessToken = jwt.sign(
        {
          id: staff._id,
          isManagingStaff: staff.isManagingStaff,
        },
        process.env.JWT_SEC,
        { expiresIn: "3d" }
      );

      const { password, ...others } = staff._doc;
      res.status(200).json({ ...others, accessToken });
    } else {
      res.status(401).json("Wrong email or Password");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;

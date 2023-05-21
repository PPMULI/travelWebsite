const express = require("express");
const User = require("../modules/User");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser")
router.post(
  "/createuser",
  [
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("email", "Enter valid email").isEmail(),
    body("password", "Enter valid password").isLength({ min: 3 }),
    body("gender", "Enter the gender"),
    body("phone", "Enter the phone number").isLength({ min: 3 }),
    body("address", "Enter valid address").isLength({ min: 3 }),
    body("fare", "Enter the fare"),
  ],
  async (req, res) => {
    const sec_pass = "Password";
    let success = false;

    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }

    try {
      let user = await User.findOne({
        email: req.body.email,
        name: req.body.name,
      });

      if (user) {
        return res.status(400).json({
          error: "Sorry user with this email or name is already exist",
        });
      }

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        gender: req.body.gender,
        address: req.body.address,
        fare: req.body.fare,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, sec_pass);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occur");
    }
  }
  );
  
  // login endpoint
  router.post(
  "/login",
  [
    body("email", "email is required").isEmail(),
    body("password", "Enter password").exists(),
  ],

  async (req, res) => {
    const sec_pass = "Password";
    let success = false;
    const error = validationResult(req);
    
    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }
    
    // destructring of the element
    const { email, password } = req.body;
    console.log(req.body.email)
    
    try {
      let user = await User.findOne({ email, password });
      console.log(user)
      if (!user) {
        success = false;
        return res.status(400).json({ error: "Invalid credentials" });
      }
      
      const data = {
        user: {
          id: user.id,
        },
      };
      
      console.log(user.id)
      const authtoken = jwt.sign(data, sec_pass)
      console.log("success12345")
      success = true;
      res.json({ email, success, authtoken });
    } catch (error) {
      res.status(500).send("Invalid credentials 3");
    }
  }
);

// get user
router.post("/getuser", fetchuser, async (req, res) => {

  let success = false
  try {
    userId = req.user.id
    const user = await User.findById(userId).select(-"password");
    res.json({success, user})
  } catch (error) {
    res.status(500).send("Internal server error")
  }
})

module.exports = router;

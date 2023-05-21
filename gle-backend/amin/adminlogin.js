const express = require("express");
const Admin = require("../modules/Admin/Adminauth")
const router = express.Router();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const fetchadmin = require("../middleware/fetchadmin")
router.post(
  "/registeradmin",
  [
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("email", "Enter valid email").isEmail(),
    body("empid", "Enter Emp ID").isLength({min: 6}),
    body("password", "Enter valid password").isLength({ min: 3 }),
    body("gender", "Enter the gender"),
    body("phone", "Enter the phone number").isLength({ min: 3 }),
    body("address", "Enter valid address").isLength({ min: 3 }),
  ],
  async (req, res) => {
    const sec_pass = "Password";
    let success = false;

    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }

    try {
      let admin = await Admin.findOne({
        empid: req.body.empid
      });

      if (admin) {
        return res.status(400).json({
          error: "You are already register with this Emp ID",
        });
      }

      admin = await Admin.create({
        name: req.body.name,
        empid: req.body.empid,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        gender: req.body.gender,
        address: req.body.address,
        fare: req.body.fare,
      });

      console.log(admin)
      const data = {
        admin: {
          id: admin.id,
        },
      };

      const authtokenadmin = jwt.sign(data, sec_pass);
      success = true;
      res.json({ success, authtokenadmin });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occur");
    }
  }
  );
  
  // login endpoint
  router.post(
  "/adminlogin",
  [
    body("email", "email is required").isLength({min: 6}),
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
  
    try {
      let admin = await Admin.findOne({ email, password });
      console.log(admin)
      if (!admin) {
        success = false;
        return res.status(400).json({ error: "Invalid credentials" });
      }
      
      const data = {
        admin: {
          id: admin.id,
        },
      };
      
      const authtokenadmin = jwt.sign(data, sec_pass)
      success = true;
      res.json({ email, success, authtokenadmin });
    } catch (error) {
      res.status(500).send("Invalid credentials 3");
    }
  }
);

 
  
// get user
router.post("/getadmin", fetchadmin, async (req, res) => {

  try {
    adminId = req.admin.id
    const admin = await Admin.findById(adminId).select(-"password");
    res.json({admin})
  } catch (error) {
    res.status(500).send("Internal server error")
  }
})

module.exports = router;

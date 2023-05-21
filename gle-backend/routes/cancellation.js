const express = require("express");
// const cancellation = require("../modules/Cancellation")
const router = express.Router();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");
const Cancellation = require("../modules/Cancellation");
router.post(
  "/reasonofcancellation",
  [
    body("email", "Enter valid email").isEmail(),
    body("reason", "Enter the reason").isLength({min: 5}),
    body("detailedreason", "Enter the detailed reason"),
  ],
  async (req, res) => {
    let success = false;

    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }

    try {
       
      user = await Cancellation.create({
        email: req.body.email,
        reason: req.body.reason,
        detailedreason: req.body.detailedreason
      });

       success = true;
      res.json({ success });
    } catch (error) {
      res.status(500).send("some error occur");
    }
  }
  );

module.exports = router;

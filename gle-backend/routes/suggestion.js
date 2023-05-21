const express = require("express");
const Suggestion = require("../modules/Suggestion")
const router = express.Router();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

router.post(
  "/givesuggestion",
  [
     body("email", "Enter the email").isLength({min: 2}),
     body("suggestion", "Enter your suggestion").isLength({min: 5})
  ],
  async (req, res) => {
    const sec_pass = "Password";
    let success = false;

    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }

    try {
      let suggestion = await Suggestion.create({
        email: req.body.email,
        suggestion: req.body.suggestion
      })

      suggestion = await Suggestion.find({})

      success = true
      res.json({ success, suggestion });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occur");
    }
  }
);

module.exports = router;
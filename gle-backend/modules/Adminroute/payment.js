const express = require("express");
const Paymentdetails = require("../Admin/Payment");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

router.post(
  "/paymentdetails",
  [
    body("cardnumber", "Enter the Card number").isLength({ min: 16 }),
    body("clientemail", "Enter the Client email").isLength({ min: 5 }),
    body("cardholdername", "Enter the Card Holder name").isLength({min: 5}).toLowerCase(),
   ],

  async (req, res) => {
    const sec_pass = "Password";
    let success = true;
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }

    // destructring of the element
    const { cardnumber, cardholdername, clientemail} = req.body;

    try {
      let paymentdetails = await Paymentdetails.create({
        cardholdername: req.body.cardholdername,
        cardnumber: req.body.cardnumber,
        clientemail: req.body.clientemail
      });

      success = true;
      res.json({ success });
    } catch (error) {
      res.status(500).send("Invalid credentials 3");
    }
  }
);

module.exports = router;

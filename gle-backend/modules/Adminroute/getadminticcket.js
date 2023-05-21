const express = require("express");
const getadminticket = require("../Admin/GetTicketAdmin")
const router = express.Router();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");


// get booked ticket

router.post(
  "/getbookedticket",
  [
    body("source", "Enter the source").isLength({min: 2}).toLowerCase(),
    body("destination", "Enter the destination").isLength({min: 2}).toLowerCase(),
    // body("date", "Enter the date").isLength({min: 2})
  ],

  async (req, res) => {
    const sec_pass = "Password";
    let success = true;
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }

    // destructring of the element
    const { source, destination } = req.body;

    try {
      let bookedticket = await getadminticket.find({ source, destination, date});
      if (!bookedticket) {
        success = false;
        return res
          .status(400)
          .json({ error: "No flight availavle with given credentials" });
      }
      
      const data = {
        bookedticket: {
          id: bookedticket.id,
        },
      };

      if (bookedticket.length == 0) {
        return res
          .status(400)
          .json({ error: "No flight availavle with given credentials123" });
      } else {
        success = true
        res.json({ success, bookedticket});
      }
    } catch (error) {
      res.status(500).send("Invalid credentials 3");
    }
  }
);
module.exports = router;
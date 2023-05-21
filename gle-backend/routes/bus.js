const express = require("express");
const Bus = require("../modules/Bus")
const router = express.Router();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

router.post(
  "/createbus",
  [
    body("source", "Enter the source").isLength({ min: 2 }),
    body("destination", "Enter the destination").isLength({ min: 2 }),
    body("sourcetime", "Enter the source time"),
    body("destinationtime", "Enter the destination time"),
    body("journeytype", "Enter the bus type").isLength({min: 2}),
    body("number", "Enter the bus number").isLength({min : 2}),
    body("class", "Enter the class").isLength({min: 2}),
    body("date", "Enter the date").isLength({min: 2})
  ],
  async (req, res) => {
    const sec_pass = "Password";
    let success = false;

    const error = validationResult(req);

    console.log(error)
    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }

    let bus = await Bus.findOne({
      number: req.body.number
    });

    console.log(bus)
    if (bus) {
      return res.status(400).json({
        error: "Sorry bus with this credentials is alredy exist",
      });
    }

    try {
      bus = await Bus.create({
        source: req.body.source,
        destination: req.body.destination,
        sourcetime: req.body.sourcetime,
        fare: req.body.fare,
        destinationtime: req.body.destinationtime,
        journeytype: req.body.journeytype,
        number: req.body.number
      });

      const data = {
        bus: {
          id: bus.id,
        },
      };

    //   console.log(bus);
      const authtoken = jwt.sign(data, sec_pass);
      success = true;
      res.json({ success });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occur");
    }
  }
);

// get flight

router.post(
  "/getbus",
  [
    body("source", "Enter the source"),
    body("destination", "Enter the destination"),
    // body("date", "enter the date"),
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
      let bus = await Bus.find({ source, destination});
      if (!bus) {
        success = false;
        return res
          .status(400)
          .json({ error: "No bus availavle with given credentials" });
      }
      console.log(bus.length);
      const data = {
        bus: {
          id: bus.id,
        },
      };

      if (bus.length == 0) {
        return res
          .status(400)
          .json({ error: "No bus availavle with given credentials123" });
      } else {
        const authtoken = jwt.sign(data, sec_pass);
        // success = true;
        res.json({ success, bus });
      }
    } catch (error) {
      res.status(500).send("Invalid credentials 3");
    }
  }
);
module.exports = router;
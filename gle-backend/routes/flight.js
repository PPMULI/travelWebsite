const express = require("express");
const Flight = require("../modules/Flight");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

router.post(
  "/createflight",
  [
    body("source", "Enter the source").isLength({ min: 2 }),
    body("destination", "Enter the destination").isLength({ min: 2 }),
    body("sourcetime", "Enter the source time"),
    body("destinationtime", "Enter the destination time"),
    body("class", "enter the class"),
    body("date", "Enter the date"),
    body("number", "Enter the flight number").isLength({min: 5}),
    body("journeytype", "Enter journey type").isLength({min: 2})
  ],
  async (req, res) => {
    const sec_pass = "Password";
    let success = false;

    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }

    let flight = await Flight.findOne({
      number: req.body.number
    });

    if (flight) {
      return res.status(400).json({
        error: "Sorry flight with this credentials is alredy exist",
      });
    }

    try {
      flight = await Flight.create({
        source: req.body.source,
        destination: req.body.destination,
        sourcetime: req.body.sourcetime,
        destinationtime: req.body.destinationtime,
        class: req.body.class,
        number: req.body.number,
        journeytype: req.body.journeytype,
        date: req.body.date.toString(),
      });

      const data = {
        flight: {
          id: flight.id,
        },
      };

      console.log(flight.id);
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
  "/getflight",
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
      let flight = await Flight.find({ source, destination});
      if (!flight) {
        success = false;
        return res
          .status(400)
          .json({ error: "No flight availavle with given credentials" });
      }
      console.log(flight.length);
      const data = {
        flight: {
          id: flight.id,
        },
      };

      if (flight.length == 0) {
        return res
          .status(400)
          .json({ error: "No flight availavle with given credentials123" });
      } else {
        const authtoken = jwt.sign(data, sec_pass);
        // success = true;
        res.json({ success, flight});
      }
    } catch (error) {
      res.status(500).send("Invalid credentials 3");
    }
  }
);
module.exports = router;
const express = require("express");
const Train = require("../modules/Train")
const router = express.Router();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

router.post(
  "/createtrain",
  [
    body("source", "Enter the source").isLength({ min: 2 }),
    body("destination", "Enter the destination").isLength({ min: 2 }),
    body("sourcetime", "Enter the source time"),
    body("destinationtime", "Enter the destination time"),
    body("class", "enter the class"),
    body("journeytype", "Enter the journey type").isLength({min: 2}),
    body("date", "Enter the date"),
    body("number", "Enter the train number").isLength({min: 5})
  ],
  async (req, res) => {
    const sec_pass = "Password";
    let success = false;

    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }

    let train = await Train.findOne({
      source: req.body.source,
      destination: req.body.destination,
      sourcetime: req.body.sourcetime,
      destinationtime: req.body.destinationtime,
      date: req.body.date,
      number: req.body.number
    });

    if (train) {
      return res.status(400).json({
        error: "Sorry train with this credentials is alredy exist",
      });
    }

    try {
      train = await Train.create({
        source: req.body.source,
        number: req.body.number,
        destination: req.body.destination,
        sourcetime: req.body.sourcetime,
        destinationtime: req.body.destinationtime,
        class: req.body.class,
        journeytype: req.body.journeytype,
        date: req.body.date.toString(),
      });

      const data = {
        train: {
          id: train.id,
        },
      };

      console.log(train.id);
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
  "/gettrain",
  [
    body("source", "Enter the source"),
    body("destination", "Enter the destination"),
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
      let train = await Train.find({ source, destination});
      if (!train) {
        success = false;
        return res
          .status(400)
          .json({ error: "No train availavle with given credentials" });
      }
      console.log(train.length);
      const data = {
        train: {
          id: train.id,
        },
      };

      if (train.length == 0) {
        return res
          .status(400)
          .json({ error: "No train availavle with given credentials123" });
      } else {
        const authtoken = jwt.sign(data, sec_pass);
        // success = true;
        res.json({ success, train});
      }
    } catch (error) {
      res.status(500).send("Invalid credentials 3");
    }
  }
);
module.exports = router;
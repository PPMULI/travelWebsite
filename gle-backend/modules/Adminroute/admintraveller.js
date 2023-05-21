const express = require("express");
const AdminTeaveller = require("../Admin/AdminTravel")
const router = express.Router();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

router.post(
  "/admintraveller",
  [
    body("source", "Enter the source").isLength({ min: 2 }).toLowerCase(),
    body("destination", "Enter the destination").isLength({ min: 2 }).toLowerCase(),
    body("departuretime", "Enter the source time").isLength({ min: 2 }).toLowerCase(),
    body("arrivaltime", "Enter the destination time").isLength({ min: 2 }).toLowerCase(),
    body("journeyclass", "enter the class").isLength({ min: 2 }).toLowerCase(),
    body("number", "Enter the flight number").isLength({min: 5}).toLowerCase(),
    body("fare", "Enter the fare").isLength({min: 2}).toLowerCase(),
    body("journeytype", "Enter journey type").isLength({min: 2}).toLowerCase(),
    body("company", "Enter name of company").isLength({min: 2})
  ],
  async (req, res) => {
    const sec_pass = "Password";
    let success = false;

    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }

    let AdminTravel = await AdminTeaveller.findOne({
      number: req.body.number,
      journeytype: req.body.journeytype
    });

    if (AdminTravel) {
      return res.status(400).json({
        error: "Sorry Vehicle with this credentials is alredy exist",
      });
    }

    try {
      AdminTeavel = await AdminTeaveller.create({
        source: req.body.source,
        destination: req.body.destination,
        departuretime: req.body.departuretime,
        arrivaltime: req.body.arrivaltime,
        journeyclass: req.body.journeyclass,
        number: req.body.number,
        journeytype: req.body.journeytype,
        fare: req.body.fare,
        company: req.body.company
      });

      const data = {
        AdminTeavel : {
          id: AdminTeavel.id,
        },
      };
      

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
  "/getvehicle",
  [
    body("source", "Enter the source").toLowerCase(),
    body("destination", "Enter the destination").toLowerCase(),
    body("journeytype", "Enter the journey type").isLength({min: 2}).toLowerCase()
  ],

  async (req, res) => {
    const sec_pass = "Password";
    let success = true;
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }

    // destructring of the element
    const { source, destination, journeytype } = req.body;

    try {
      let traveller = await AdminTeaveller.find({ source, destination, journeytype});
      if (!traveller) {
        success = false;
        return res
          .status(400)
          .json({ error: "No flight availavle with given credentials" });
      }
      
      const data = {
        traveller: {
          id: traveller.id,
        },
      };

      if (traveller.length == 0) {
        return res
          .status(400)
          .json({ error: "No flight availavle with given credentials123" });
      } else {
        success = true
        res.json({ success, traveller});
      }
    } catch (error) {
      res.status(500).send("Invalid credentials 3");
    }
  }
);
module.exports = router;
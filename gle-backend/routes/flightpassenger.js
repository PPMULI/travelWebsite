const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");
const FlightPassenger = require("../modules/FlightPassenger");

router.post(
  "/bookticket",
  [
    body("source", "Enter the source").isLength({ min: 2 }),
    body("destination", "Enter the destination").isLength({ min: 2 }),
    body("passaadhar", "enter the passenger aadhar number"),
    body("travellingdate", "Enter the date"),
    body("passemail", "Enter the passenger email").isEmail(),
    body("passname", "enter the passenger name").isLength({ min: 2 }),
    body("passgender", "Enter the gender"),
    body("journeytype", "Enter the journey type").isLength({ min: 5 }),
    body("number", "Enter the seat number").isLength({min: 2}),
    body("number", "Enter the flight number").isLength({ min: 5 }),
    body("passcontact", "Enter the passcontact"),
  ],
  async (req, res) => {
    const sec_pass = "Password";
    let success = false;

    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }

    let remainingSeat = await FlightPassenger.find({
      source: req.body.source,
      destination: req.body.destination,
      travellingdate: req.body.travellingdate.toString(),
      number: req.body.number,
    });

    console.log(remainingSeat.length + 1);

    try {
      flightpassenger = await FlightPassenger.create({
        source: req.body.source,
        destination: req.body.destination,
        passemail: req.body.passemail,
        passname: req.body.passname,
        passgender: req.body.passgender,
        number: req.body.number,
        number: req.body.number,
        journeytype: req.body.journeytype,
        passaadhar: req.body.passaadhar,
        class: req.body.class,
        travellingdate: req.body.travellingdate.toString(),
      });

      const data = {
        flightpassenger: {
          id: flightpassenger.id,
        },
      };

      let date = req.body.travellingdate;
      const authtoken = jwt.sign(data, sec_pass);
      success = true;
      res.json({ success });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occur");
    }
  }
);

router.get("/fetchbookedticket", fetchuser, async (req, res) => {
  const passengerTicket = await FlightPassenger.find({ user: req.user.id });
  res.json(passengerTicket);
});

module.exports = router;

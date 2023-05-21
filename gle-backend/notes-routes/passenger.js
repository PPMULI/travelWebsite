const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const jwt = require("jsonwebtoken");
const Passenger = require("../notes-module/Passenger");
const { body, validationResult } = require("express-validator");
const { title } = require("process");

router.post(
  "/fetchpassenger",
  [body("email", "Enter the email").isLength({ min: 2 })],

  async (req, res) => {
    const sec_pass = "Password";
    let success = false;
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }
    console.log("fgh")

    // destructring of the element
    const { email } = req.body;

    try {
      let passengeremail = await Passenger.find({ email });
      if (!passengeremail) {
        success = false;
        return res.status(400).json({
          error: "No Ticket is book availavle with given credentials",
        });
      }
       
      const data = {
        passengeremail: {
          id: passengeremail.id,
        },
      };

      if (passengeremail.length == 0) {
        return res
          .status(400)
          .json({success, error: "No train availavle with given credentials123" });
      } else {
        const authtoken = jwt.sign(data, sec_pass);
        success = true;
        let len = passengeremail.length;
        res.json({success, passengeremail, len} );
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Invalid credentials 3");
    }
  }
);

// get passenger booked ticket details - Admin
router.post(
  "/fetchbooking",
  [body("source", "Enter the source").isLength({ min: 2 }),
   body("destination", "Enter the destination").isLength({min: 2}),
  //  body("travellingdate", "Enter the date").isLength({min: 2})
  ],

  async (req, res) => {
    const sec_pass = "Password";
    let success = false;
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }
    
    // destructring of the element
    const { source, destination } = req.body;

    try {
      let passengercredentials = await Passenger.find({ source, destination });
      if (!passengercredentials) {
        success = false;
        return res.status(400).json({
          error: "No Ticket is book availavle with given credentials",
        });
      }
       
      const data = {
        passengercredentials: {
          id: passengercredentials.id,
        },
      };

      console.log(passengercredentials.id)
      if (passengercredentials.length == 0) {
        return res
          .status(400)
          .json({success, error: "No train availavle with given credentials123" });
      } else {
        const authtoken = jwt.sign(data, sec_pass);
        success = true;
        let len = passengercredentials.length;
        res.json({success, passengercredentials, len} );
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Invalid credentials 3");
    }
  }
);

// Add a passenger
router.post(
  "/addpassenger",
  [
    body("departuretime", "Enter departure time").isLength({min: 2}),
    body("destinationtime", "Enter arrival time").isLength({min: 2}),
    body("email", "Enter the email").isLength({ min: 2 }),
    body("source", "Enter the source").isLength({ min: 2 }),
    body("destination", "Enter the destination").isLength({ min: 2 }),
    body("passaadhar", "enter the passenger aadhar number"),
    body("travellingdate", "Enter the date"),
    body("passemail", "Enter the passenger email").isEmail(),
    body("passname", "enter the passenger name").isLength({ min: 2 }),
    body("passgender", "Enter the gender"),
    body("passcontact", "Enter the passcontact"),
    body("journeytype", "Enter the type").isLength({ min: 2 }),
    body("number", "Enter the bus number").isLength({ min: 2 }),
  ],
  fetchuser,
  async (req, res) => {
    let success = false;
    try {
      const {
        departuretime,
        destinationtime,
        email,
        source,
        destination,
        passaadhar,
        travellingdate,
        passemail,
        passname,
        passgender,
        passcontact,
        journeytype,
        number,
      } = req.body;
      let success = false;

      const error = validationResult(req);

      if (!error.isEmpty()) {
        return res.status(400).json({ success, error: error.array() });
      }

      let findpassenger = await Passenger.find({
        source,
        destination,
        travellingdate,
        journeytype,
      });

      console.log(findpassenger.length);

      if (findpassenger.length >= 13) {
        console.log("No seat available");
        res.json(findpassenger);
      } else {
        const passenger = new Passenger({
          email,
          source,
          destinationtime,
          departuretime,
          destination,
          passaadhar,
          passcontact,
          travellingdate,
          passemail,
          passname,
          passgender,
          number,
          journeytype,
          user: req.user.id,
        });

        const savepassenger = await passenger.save();
        success = true;
        res.json({ success, savepassenger });
        console.log("success")
      }
    } catch (error) {
      res.status(500).send("Invalid credentials 3");
    }
  }
);

// Edit a note
router.put("/updatepassenger/:id", fetchuser, async (req, res) => {
  const { travellingdate } = req.body;
  console.log(req.body);
  const newDate = {};

  if (travellingdate) {
    newDate.travellingdate = travellingdate;
  }

  let pass = await Passenger.findById(req.params.id);

  if (!pass) {
    return res.status(404).send("Not find");
  }

  //   if (pass.user.toString() !== req.user.id) {
  //     return res.status(401).send("unauthorised user");
  //   }

  pass = await Passenger.findByIdAndUpdate(
    req.params.id,
    { $set: newDate },
    { new: true }
  );

  res.json(pass);
});

// Endpoint for the delete note
router.delete("/deletepassenger/:id", fetchuser, async (req, res) => {
  let pass = await Passenger.findById(req.params.id);

  if (!pass) {
    return res.status(404).send("Not find");
  }
 

  pass = await Passenger.findByIdAndDelete(req.params.id);
  res.json(pass);
  console.log("Ticket is cancelled");
});

module.exports = router;

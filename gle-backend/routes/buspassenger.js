const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");
const Buspassenger = require("../modules/Buspassenger")

router.post(
  "/bookbusticket",
  [
    body("source", "Enter the source").isLength({ min: 2 }),
    body("destination", "Enter the destination").isLength({ min: 2 }),
    body("passaadhar", "enter the passenger aadhar number"),
    body("travellingdate", "Enter the date"),
    body("passemail", "Enter the passenger email").isEmail(),
    body("passname", "enter the passenger name").isLength({ min: 2 }),
    body("passgender", "Enter the gender"),
    body("passcontact", "Enter the passcontact"),
    body("journeytype", "Enter the type").isLength({min: 2}),
    body("busnumber", "Enter the bus number").isLength({min: 2})
  ],
  async (req, res) => {
    const sec_pass = "Password";
    let success = false;

    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({ success, error: error.array() });
    }

    let remainingSeat = await Buspassenger.find({
      source: req.body.source,
      destination: req.body.destination,
      travellingdate: req.body.travellingdate.toString(),
      busnumber: req.body.busnumber,
    })
    // let buspassenger = await Buspassenger.findOne({
    //   source: req.body.source,
    //   destination: req.body.destination,
    //   travellingdate: req.body.travellingdate,
    //   passaadhar: req.body.passaadhar,
    //   passemail: req.body.passemail,
    //   passname: req.body.passname,
    //   passgender: req.body.passgender,
    //   passcontact: req.body.passcontact,
    // });

    // console.log(buspassenger)
    // if (buspassenger) {
    //   return res.status(400).json({
    //     error: "passenger exit",
    //   });
    // }

    try {
      buspassenger = await Buspassenger.create({
        source: req.body.source,
        destination: req.body.destination,
        passemail: req.body.passemail,
        passname: req.body.passname,
        passgender: req.body.passgender,
        passaadhar: req.body.passaadhar,
        journeytype: req.body.journeytype,
        busnumber: req.body.busnumber,
        travellingdate: req.body.travellingdate.toString(),
      });

      const data = {
        buspassenger: {
          id: buspassenger.id,
        },
      };
 
      console.log(buspassenger.id);
      const authtoken = jwt.sign(data, sec_pass);
      success = true;
      res.json({ success, remainingSeat,  authtoken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error occur");
    }
  }
);

// get user
router.post('/getticket', async (req, res) => {
  try{
    userID = req.user.id;
    console.log("get")
    console.log(userID)
    const user = await User.findById(userID).
     res.json(user)
    console.log(user)
  }
  catch{
    console.log("fail")
  }
})
module.exports = router;

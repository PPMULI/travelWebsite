const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");
const Trainpassenger = require("../modules/TrainPassenger");

// router.post(
//   "/booktrainticket",
//   [
//     body("source", "Enter the source").isLength({ min: 2 }),
//     body("destination", "Enter the destination").isLength({ min: 2 }),
//     body("passaadhar", "enter the passenger aadhar number"),
//     body("travellingdate", "Enter the date"),
//     body("passemail", "Enter the passenger email").isEmail(),
//     body("passname", "enter the passenger name").isLength({ min: 2 }),
//     body("passgender", "Enter the gender"),
//     body("passcontact", "Enter the passcontact"),
//     body("journeytype", "Enter Journey type").isLength({min: 1})
//   ],
//   async (req, res) => {
//     const sec_pass = "Password";
//     let success = false;

//     const error = validationResult(req);

//     if (!error.isEmpty()) {
//       return res.status(400).json({ success, error: error.array() });
//     }

//     // let trainpassenger = await Trainpassenger.findOne({
//     //   source: req.body.source,
//     //   destination: req.body.destination,
//     //   travellingdate: req.body.travellingdate,
//     //   passaadhar: req.body.passaadhar,
//     //   passemail: req.body.passemail,
//     //   passname: req.body.passname,
//     //   passgender: req.body.passgender,
//     //   passcontact: req.body.passcontact,
//     // });

//     let remainingSeat = await Trainpassenger.find({
//       source: req.body.source,
//       destination: req.body.destination,
//       travellingdate: req.body.travellingdate
//     })
//     // if (trainpassenger) {
//     //   return res.status(400).json({
//     //     error: "passenger exit",
//     //   });
//     // }

//     try {
//       trainpassenger = await Trainpassenger.create({
//         source: req.body.source,
//         destination: req.body.destination,
//         journeytype: req.body.journeytype,
//         passemail: req.body.passemail,
//         passname: req.body.passname,
//         passgender: req.body.passgender,
//         passaadhar: req.body.passaadhar,
//         passcontact: req.body.passcontact,
//         travellingdate: req.body.travellingdate.toString(),
//       });

//       const data = {
//         trainpassenger: {
//           id: trainpassenger.id,
//         },
//       };

//       console.log(trainpassenger);
//       const authtoken = jwt.sign(data, sec_pass);
//       success = true;
//       res.json({ success, remainingSeat, authtoken });
//     } catch (error) {
//       console.log(error.message);
//       res.status(500).send("some error occur");
//     }
//   }
// );

// fetching the ticket
router.get("/fetchuserticket", fetchuser, async (req, res) => {
  const trainpass = await Trainpassenger.find({ user: req.user.id });
  res.json(trainpass);
  console.log(req.user.id);
});

router.post(
  "/booktrainticket",
  // fetchuser,
  [
    body("source", "Enter the source").isLength({ min: 2 }),
    body("destination", "Enter the destination").isLength({ min: 2 }),
    body("passaadhar", "enter the passenger aadhar number"),
    body("travellingdate", "Enter the date"),
    body("passemail", "Enter the passenger email").isEmail(),
    body("passname", "enter the passenger name").isLength({ min: 2 }),
    body("passgender", "Enter the gender"),
    body("passcontact", "Enter the passcontact"),
    body("journeytype", "Enter Journey type").isLength({ min: 1 }),
  ],
  async (req, res) => {
    try {
      const {
        source,
        destination,
        passaadhar,
        travellingdate,
        passemail,
        passname,
        passgender,
        passcontact,
        journeytype,
      } = req.body;

      
      const pass = new Trainpassenger({
        source,
        destination,
        passaadhar,
        travellingdate,
        passcontact,
        passemail,
        passname,
        passgender,
        journeytype,
        user: req.user.id,
      });
      
      console.log("yes")
      const savepass = await pass.save();
      res.json(savepass);
    } catch (error) {
      console.log("error");
    }
  }
);
module.exports = router;

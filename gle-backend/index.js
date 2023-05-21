const connectToMongoose = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongoose();
const app = express();
const port = 5000;

// app.use(cors());
app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.use("/api/flight", require("./routes/flight"));
app.use("/api/train", require("./routes/train"));
app.use("/api/flightpassenger", require("./routes/flightpassenger"))
app.use("/api/train", require("./routes/trainpassenger"));
app.use("/api/bus", require("./routes/bus"));
app.use("/api/buspassenger", require("./routes/buspassenger"))
app.use("/api/passenger", require("./notes-routes/passenger"))
app.use("/api/suggestion", require("./routes/suggestion"))
app.use("/api/ticketcancellation", require("./routes/cancellation"))
app.use("/api/adminauth", require("./amin/adminlogin"))
app.use("/api/admintravel", require("./modules/Adminroute/admintraveller"))
app.use("/api/getbookedticket", require("./modules/Adminroute/getadminticcket"))
app.use("/api/paymentdetails", require("./modules/Adminroute/payment"))

app.listen(port, () => {
  console.log("You connected to mongoose");
});

const mongoose = require("mongoose");
const { Schema } = mongoose;

const flightpassengerSchemas = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  source: {
    type: String,
    require: true,
  },

  destination: {
    type: String,
    require: true,
  },

  travellingdate: {
    type: String,
    require: true,
  },

  company: {
    type: String,
    require: true,
  },

  passemail: {
    type: String,
    require: true,
  },

  passname: {
    type: String,
    require: true,
  },

  passgender: {
    type: String,
    require: true,
  },

  passphone: {
    type: String,
    require: true,
  },
  class: {
    type: String,
    require: true,
  },

  passaadhar: {
    type: String,
    require: true,
  },

  number: {
    type: String,
    require: true,
  },

  flightnumber: {
    type: String,
    require: true,
  },

  journeytype: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("flightpassenger", flightpassengerSchemas);

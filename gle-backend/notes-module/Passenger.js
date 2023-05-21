const mongoose = require("mongoose");
const { Schema } = mongoose;

const passengerSchemas = new Schema({
  email: {
    type: String,
    require: true,
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

  passemail: {
    type: String,
    require: true,
  },

  passname: {
    type: String,
    require: true,
  },

  journeytype: {
    type: String,
    require: true,
  },

  passgender: {
    type: String,
    require: true,
  },

  number: {
    type: String,
    require: true,
  },

  passcontact: {
    type: String,
    require: true,
  },

  passaadhar: {
    type: String,
    require: true,
  },

  departuretime: {
    type: String,
    require: true
  },

  destinationtime: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("passenger", passengerSchemas);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const buspassengerSchemas = new Schema({
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

  busnumber: {
    type: String,
    require: true
  },

  passphone: {
    type: String,
    require: true,
  },

  passaadhar: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("buspassenger", buspassengerSchemas);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const AdmintravelSchemas = new Schema(
  {
    source: {
      type: String,
      require: true,
    },

    destination: {
      type: String,
      require: true,
    },

    journeyclass: {
      type: String,
      require: true,
    },

    fare: {
      type: String,
      require: true
    },
    
    departuretime: {
      type: String,
      require: true,
    },

    arrivaltime: {
      type: String,
      require: true,
    },

    number: {
      type: String,
      require: true,
    },

    journeytype: {
      type: String,
      require: true,
    },

    company:  {
      type: String,
      require: true
    }
  },
  {
    timestamps: true,
   
  }
);

module.exports = mongoose.model("Admintravel", AdmintravelSchemas);

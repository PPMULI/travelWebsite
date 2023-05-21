const mongoose = require("mongoose");
const { Schema } = mongoose;

const FlightSchemas = new Schema(
  {
    source: {
      type: String,
      require: true,
    },

    destination: {
      type: String,
      require: true,
    },

    class: {
      type: String,
      require: true,
    },

    sourcetime: {
      type: String,
      require: true,
    },

    destinationtime: {
      type: String,
      require: true,
    },

    date: {
      type: String,
      require: true,
    },

    number: {
      type: String,
      require: true
    },

    journeytype: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true,
    // Date: {
    //     type: new Date(),
    //     require: true
    // }
    // true
  }
);

module.exports = mongoose.model("flight", FlightSchemas);

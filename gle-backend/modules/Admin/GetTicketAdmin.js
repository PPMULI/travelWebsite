const mongoose = require("mongoose");
const { Schema } = mongoose;

const getticketadmin = new Schema(
  {
    source: {
      type: String,
      require: true,
    },

    destination: {
      type: String,
      require: true,
    },

    // date: {
    //     type: String,
    //     require: true
    // }
  },
);

module.exports = mongoose.model("bookedticket", getticketadmin);

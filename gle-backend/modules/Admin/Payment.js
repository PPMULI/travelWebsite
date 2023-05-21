const mongoose = require("mongoose");
const { Schema } = mongoose;

const PaymentSchemas = new Schema(
  {
    cardnumber: {
        type: String,
        require: true
    },

    cardholdername: {
        type: String, 
        require: true,
    },

    clientemail: {
        type: String,
        require: true
    }
  }
);

module.exports = mongoose.model("Paymentdetails", PaymentSchemas);

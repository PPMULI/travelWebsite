const mongoose = require("mongoose");
const { Schema } = mongoose;

const cancelSchemas = new Schema(
  {
    email: {
        type: String,
        require: true
    },

    reason: {
        type: String,
        require: true
    },

    detailreason: {
        type: String,
        require: true
    }
  }
);

module.exports = mongoose.model("cancelledtickets", cancelSchemas);

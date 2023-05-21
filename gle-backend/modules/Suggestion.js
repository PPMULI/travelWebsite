const mongoose = require("mongoose");
const { Schema } = mongoose;

const SuggestionSchemas = new Schema(
  {
     email: {
        type: String,
        require: true
     },

     suggestion: {
        type: String,
        require: true
     }
  }
);

module.exports = mongoose.model("suggestion", SuggestionSchemas);

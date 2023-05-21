const mongoose = require("mongoose");
const { Schema } = mongoose;

const trainpassengerSchemas = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
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
        require: true
    },

    company: {
        type: String,
        require: true,
    },

    
    passemail:{
        type: String,
        require: true 
    },

    passname: {
        type: String,
        require: true
    },
    
    passgender: {
        type: String,
        require: true
    },

    passcontact: {
        type: String,
        require: true
    },

    journeytype: {
        type: String,
        require: true,
    },
    
    passaadhar: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('trainpassenger', trainpassengerSchemas)
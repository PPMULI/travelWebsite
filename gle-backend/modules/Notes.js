const mongoose = require('mongoose');
const {Schema} = mongoose;

const notesSchemas = new Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
     
    title:{
        type: String,
        required: true 
    },

    description: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('notes', notesSchemas)
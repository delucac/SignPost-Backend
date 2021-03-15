const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Place = new Schema({
    place_name: {
        type: String
    },
    place_description: {
        type: String
    },
    place_address: {
        type: String
    },
    place_owner: {
        type: String
    } ,
    place_type: {
        type: String
    }
})

module.exports = mongoose.model('Place', Place);
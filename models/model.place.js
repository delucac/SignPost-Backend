const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Place = new Schema({
    place_name: String,
    place_description: String,
    place_address: String,
    place_owner: String,
    place_type: String
});

module.exports = mongoose.model('Place', Place);
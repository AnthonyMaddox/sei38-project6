const mongoose = require('../db/connection')

const Schema = mongoose.Schema;

const City = new Schema({
   City: String,
   State: String,
   District: String
})

module.exports = mongoose.model('City', City);
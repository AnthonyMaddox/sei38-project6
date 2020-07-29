const mongoose = require('../db/connection')

const Schema = mongoose.Schema;

const Cities = new Schema({
   City: String,
   State: String,
   District: String
})

module.exports = mongoose.model('Cities', Cities);
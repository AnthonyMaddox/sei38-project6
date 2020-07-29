const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/indian-cities", { useNewUrlParser: true });

module.exports = mongoose;
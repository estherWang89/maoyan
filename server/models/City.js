const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    nm: { type: String },
    py: { type: String},
  })
module.exports = mongoose.model('City', schema)  
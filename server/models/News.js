const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    id:{type:Number},
    title:{type:String},
})
module.exports = mongoose.model('News', schema) 
const mongoose = require('mongoose')
const schema = new mongoose.Schema(
  {
    avatar: {type:String},
    id: {type:Number},
    cnm: {type:String},
  }
)
module.exports = mongoose.model('HotCelebrity', schema)  
const mongoose = require('mongoose')
const schema = new mongoose.Schema(
  {
    img: {type:String},
    id: {type:Number},
    nm: {type:String},
    wish:{type:Number},
    wishst:{type:Number},
    haspromotionTag:{type:Boolean},
    version:{type:String},
    preShow:{type:Boolean},
    sc:{type:Number},
    globalReleased:{type:Boolean},
    star:{type:String},
    rt:{type:String},
    showst:{type:Number},
    comingTitle:{type:String},
  },
)
module.exports = mongoose.model('CommingCinema', schema)  


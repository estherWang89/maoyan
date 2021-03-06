const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  distribution:[{
    level: {type:String},
    percent: {type:Number},
    setLevel: {type:Boolean},
    setPercent: {type:Boolean},
  }],
  hotComments:[{
  avatarUrl: {type:String},
buyTicket: {type:Boolean},
content: {type:String},
gender: {type:Number},
id: {type:Number},
imageUrls: [{type:String}],
likedByCurrentUser: {type:Boolean},
major: {type:Boolean},
movieId: {type:Number},
nick: {type:String},
replyCount:{type:Number},
score: {type:Number},
spoiler: {type:Boolean},
startTime: {type:String},
time: {type:Number},
upCount: {type:Number},
userId: {type:Number},
userLevel: {type:Number},
vipInfo: {type:String},
vipType: {type:Number},
    }],
    celebrities:[{
    avatar: {type:String},
    cnm: {type:String},
    cr: {type:Number},
    desc: {type:String},
    id: {type:Number},
    ocr: {type:Number},
    roles: {type:String},
    still: {type:String},
    }],
    postImg:{type:String},
    availableEpisodes: {type:Number},
    awardUrl: {type:String},
    backgroundColor: {type:String},
    bingeWatch: {type:Number},
    bingeWatchst:  {type:Number},
    cat: {type:String},
    comScorePersona: {type:Boolean},
    commented: {type:Boolean},
    dir: {type:String},
    dra: {type:String},
    dur: {type:Number},
    egg: {type:Boolean},
    enm: {type:String},
    episodeDur: {type:Number},
    episodes: {type:Number},
    fra: {type:String},
    frt: {type:String},
    globalReleased: {type:Boolean},
    hasSarftCode: {type:Boolean},
    id: {type:Number},
    img: {type:String},
    latestEpisode: {type:Number},
    modcsSt: {type:Boolean},
    movieType: {type:Number},
    multiPub: {type:Boolean},
    musicNum: {type:Number},
    nm: {type:String},
    onSale: {type:Boolean},
    onlineDate: {type:String},
    onlinePlay: {type:Boolean},
    orderSt: {type:Number},
    oriLang: {type:String},
    photos: [{type:String}],
    pn:{type:Number},
    preScorePersona: {type:Boolean},
    proScore: {type:Number},
    proScoreNum: {type:Number},
    pubDate: {type:Number},
    pubDesc: {type:String},
    sc: {type:Number},
    scm: {type:String},
    scoreLabel: {type:String},
    showst: {type:Number},
    snum: {type:Number},
    src:  {type:String},
    star:  {type:String},
    time:  {type:String},
    type: {type:Number},
    vd: {type:String},
    ver: {type:String},
    videoImg:  {type:String},
    videoName:  {type:String},
    videourl:  {type:String},
    viewedSt: {type:Number},
    vnum: {type:Number},
    vodFreeSt: {type:Number},
    vodPlay: {type:Boolean},
    vodSt: {type:Number},
    watched: {type:Number},
    wish: {type:Number},
    wishst: {type:Number}
  })

module.exports = mongoose.model('Film', schema)  
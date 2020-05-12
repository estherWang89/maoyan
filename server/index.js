const express = require("express");
const app = express()
app.set('secret','rr125fdgfdh1225t2o');
app.use(require('cors')())
app.use(express.json())
app.use('/imgs',express.static(__dirname+'/imgs'))
require('./plugins/db')(app)
require('./route')(app)

app.listen(3000,()=>{
    console.log('http://localhost:3000');
})
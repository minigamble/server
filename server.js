const express = require('express')
//const cors = require('cors');
//const router = require('express').Router();
//const serve   = require('express-static');
const path   = require('path');


const app = express()

//app.use(cors());

app.use("/",express.static(path.join(__dirname + '/build')))
app.use("/*/",express.static(path.join(__dirname + '/build')))




const server = app.listen(3000, function(){
  console.log('server is running at %s', server.address().port);
});


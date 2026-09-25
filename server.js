var express = require('express')
var server = express()
server.get('/get',async (req,res)=>{
  res.json({"Hello":"say hello"})
});

module.exports = server
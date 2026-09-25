var express = require('express')
var server = express()
server.get('/get',async,(req,res)=>{
  res.json({"Hello":"say hello"})
});
 server.listen(5000, () => {
    console.log(`Server is running on port `);
 });
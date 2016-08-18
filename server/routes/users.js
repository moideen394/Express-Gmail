var express = require('express');
var router = express.Router();

router.get('/GP',function(req,res){
  res.send("Hello this is personal GP");
});

module.exports=router;

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bear = require('./../models/bear.js');
mongoose.Promise=global.Promise;
//GET
router.get('/', function(req, res){
  console.log("Getting the data");
  var br = new bear();

br.from=req.body.from;
br.subject=req.body.subject;
br.date=req.body.date;
 br.find(function(err, data) {
     if (err)
         res.send(err);
     res.json(data);
console.log("values"+data);
 });
});
//POST
router.post('/', function(req, res)
{

  var br = new bear();

br.from=req.body.from;
br.subject=req.body.subject;
br.date=req.body.date;
br.save(function(err,succ){
  console.log("inside save calback");
  if(err){
    console.log("error");
    res.send(err);
  }
  else{
    console.log("success");
    res.send({"response" :"done" });
  }
});
});
//DELETE
router.delete('/', function(req, res)
{
  var br = new bear();
  br.from=req.body.from;
  br.subject=req.body.subject;
  br.date=req.body.date;

  br.remove({date:br.date},function(err) {
       if (err)
           res.send(err);

   console.log("removed"+br.date);
   });
});
//PUT
router.put('/',function(req,res)
  {
    console.log("error");
    bear.findById({_id:req.body.id},function(err,data)
    {
      if(err)
      {
        res.send(err);
      }
        data.name=req.body.name;
        data.save(function(err) {
             if (err){
                 res.send(err);
             }
         console.log("saved");
      });
    });
  });
module.exports=router;

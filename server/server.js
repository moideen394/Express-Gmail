var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/users');
var db = mongoose.connection;

db.once('open',function(){
  console.log("inside connection");
});

var indexroute = require('./routes/index');

app.use('/', indexroute);

app.listen("8080",function(err){
  console.log("Server started at port 8080");
});

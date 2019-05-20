var express = require('express');
var app = express();
var path = require('path');

var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname,'web')));

app.listen(PORT,function(){
  console.log("CafeSupremo HTML5 client started at port " + PORT);
});

var PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
app.use(express.static('web'));
app.listen(PORT);
console.log("Server started in port:" + PORT);

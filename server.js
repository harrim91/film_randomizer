process.env.NODE_ENV = process.env.NODE_ENV || `development`;

var express = require(`./config/express`);
var mongoose = require(`./config/mongoose`);

var db = mongoose();
var app = express();

app.listen(3000);
console.log(`${process.env.NODE_ENV} server listening at http://localhost:3000`);

module.exports = app;
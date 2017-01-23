var config = require('./config');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function() {
  var app = express();
  
  if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(express.static('./public'));

  var index = require('../app/routes/index.routes.js')(app);
  var films = require('../app/routes/films.routes.js')(app);
  
  return app;
};
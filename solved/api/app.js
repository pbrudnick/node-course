const express = require('express'),
  app = express(),
  config = require('./config'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

require('./models/task-model');

mongoose.Promise = global.Promise;
mongoose.connect(config.db, {useMongoClient: true}); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// register the routes
require('./routes')(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(3000, function () {
  console.log('todo-list-api listening on port 3000');
});

module.exports = app;
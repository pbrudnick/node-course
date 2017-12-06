const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

require("./routes")(app);

app.listen(3000, function () {
  console.log('todo-list-api listening on port 3000');
});

//module.exports = app;
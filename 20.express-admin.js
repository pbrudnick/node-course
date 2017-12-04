const express = require('express'),
  app = express(),
  admin = express();

admin.get('/', function (req, res) {
  res.send('Admin Homepage');
});

app.use('/admin', admin); // mount the sub app

app.listen(8000, function () {
  console.log('App listening on port 8000!');
});
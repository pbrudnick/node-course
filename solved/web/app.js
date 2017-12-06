const express = require('express'),
  app = express(),
  cluster = require('cluster'),
  morgan = require("morgan"),
  helmet = require("helmet");

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(helmet());

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < require('os').cpus().length; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  // Workers can share any TCP connection
  app.listen(8000, function () {
    console.log('App listening on port 8000!');
  });

  console.log(`Worker ${process.pid} started`);
}
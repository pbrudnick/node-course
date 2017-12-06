const http = require('http'),
  { fork } = require('child_process'),
  hostname = '127.0.0.1',
  port = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/compute') {
    console.log("entró y forkeo...");
    const compute = fork('./compute.js');
    compute.send('start');
    compute.on('message', sum => {
      res.end(`Sum is ${sum}`);
    });

    compute.on('exit', function (code, signal) {
      console.log(`child process exited with code ${code} and signal ${signal}`);
    });
  } else {
    console.log("entró a otro route");
    res.end('Ok')
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
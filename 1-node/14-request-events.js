const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Welcome");
// });

const server = http.createServer()

// emits request event
// subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('listening to request event')
})

server.listen(5000);

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to out homepage");
  }

  if (req.url === "/about") {
    res.end("This is the about page");
  }

  res.end(`<h1>Oops!</h1>
  <p>We cant seem to find the page you're looking for</p>
  <a href="/">back homepage</a>`);
});

server.listen(4000);

const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./navbar-app/index.html");
const homeStyle = readFileSync("./navbar-app/styles.css");
const homeLogo = readFileSync("./navbar-app/logo.svg");
const homeJS = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  const url = req.url;

  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page<h1/>");
    res.end();
  }
  // styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyle);
    res.end();
  }
  // image
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeLogo);
    res.end();
  }
  // logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeJS);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not Found<h1/>");
    res.end();
  }
});

server.listen(5000);

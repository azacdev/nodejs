const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

//  req => middleware => res
// api/home/about/products

// 1. use vs route
// 2. options - our own / express / third party

// app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Items");
});

app.get("/api/items", [logger, authorize], (req, res) => {
  res.send("Items");
  console.log(req.user);
});

app.listen(5000);

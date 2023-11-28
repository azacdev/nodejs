const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const fileStream = fs.createReadStream("./content/big.txt", {
      highWaterMark: 50000,
      encoding: "utf8",
    });

    fileStream.on("open", () => {});

    fileStream.on("error", (error) => {
      res.end(error);
    });
    // const text = fs.readFileSync("./content/big.txt", "utf8")
    res.end(text);
  })
  .listen(5000);

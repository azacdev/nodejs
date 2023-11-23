const { readFile } = require("fs");

console.log("started the first task");

// check file path
// read file is asynchronous
readFile("../content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  }

  console.log(result);
  console.log("completed first task");
});

console.log("starting next task");

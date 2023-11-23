const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `hello this is a file created with writeFileSync, here is the result ${first}, ${second}`,
  { flag: "a" }
);

console.log(first);
console.log(second);
console.log("done with this task");
console.log("starting the next one");

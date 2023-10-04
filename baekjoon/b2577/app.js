let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const num = input.map(Number).reduce((a, b) => a * b, 1);
const result = Array(10).fill(0);
[...num.toString()].map((v) => result[v]++);
console.log(result.join("\n"));

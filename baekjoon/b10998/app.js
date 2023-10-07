const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [A, B] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(a, b) {
  return a * B;
}

console.log(solution(A, B));

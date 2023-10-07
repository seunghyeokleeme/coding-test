const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [A, B, V] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(a, b, v) {
  return Math.ceil((v - b) / (a - b));
}

console.log(solution(A, B, V));

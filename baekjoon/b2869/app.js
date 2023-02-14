const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(info) {
  const [A, B, V] = info;
  return Math.ceil(V - B / A - B);
}

const result = solution(input);
console.log(result);

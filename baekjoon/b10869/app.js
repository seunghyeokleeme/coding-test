const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [A, B] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(a, b) {
  const result = [];
  result.push(a + b);
  result.push(a - b);
  result.push(a * b);
  result.push(~~(a / b));
  result.push(a % b);

  return result.join("\n");
}

console.log(solution(A, B));

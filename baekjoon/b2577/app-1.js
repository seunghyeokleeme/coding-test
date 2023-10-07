const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => +i);

const [A, B, C] = input;

function solution(a, b, c) {
  const result = String(a * b * c).split("");
  const arr = Array(10).fill(0);
  for (const index of result) {
    arr[+index] += 1;
  }
  return arr.join("\n");
}

console.log(solution(A, B, C));

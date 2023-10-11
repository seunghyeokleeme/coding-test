const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(n, k) {
  let result = 1;
  let a = 1;
  if (k === 0) return result;
  for (let i = 0; i < k; i++) {
    result *= n - i;
    a *= i + 1;
  }
  return (result /= a);
}

console.log(solution(N, K));

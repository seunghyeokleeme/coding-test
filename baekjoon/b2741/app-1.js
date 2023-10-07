const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(N) {
  const result = [];
  for (let i = 1; i <= N; i++) {
    result.push(i);
  }
  return result.join("\n");
}

console.log(solution(+input));

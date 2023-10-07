const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = +fs.readFileSync(filePath).toString().trim();

function solution(count) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr[i] = " ".repeat(count - (i + 1)) + "*".repeat(i + 1);
  }
  return arr.join("\n");
}

console.log(solution(input));

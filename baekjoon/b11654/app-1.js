const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(str) {
  return input.charCodeAt();
}

console.log(solution(input));

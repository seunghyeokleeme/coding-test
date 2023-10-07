const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const result = [];
  for (const char of alphabet) {
    result.push(word.indexOf(char));
  }
  return result.join(" ");
}

console.log(solution(input));

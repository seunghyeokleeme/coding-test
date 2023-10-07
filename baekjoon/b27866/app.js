const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [word, index] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(S, i) {
  return S[i - 1];
}

console.log(solution(word, +index));

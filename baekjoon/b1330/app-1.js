const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const [A, B] = input;

function solution(a, b) {
  if (A > B) console.log(">");
  else if (A < B) console.log("<");
  else console.log("==");
}

solution(A, B);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(item => +item);

input.sort((a, b) => a - b);

solution(input);

function solution(testCase) {
  for (let i = 1; i <= 30; ++i) {
    if (testCase.findIndex(item => item === i) === -1) console.log(i);
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => +i);

function solution(testCase) {
  let pivot = testCase[0];
  let index = 0;
  for (let i = 1; i < testCase.length; i++) {
    if (pivot < testCase[i]) {
      pivot = testCase[i];
      index = i;
    }
  }
  return `${pivot}\n${index + 1}`;
}

console.log(solution(input));

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(testCase) {
  let ascending = true;
  if (testCase[0] > testCase[1]) ascending = !ascending;
  let pivot = testCase[1];
  for (let i = 2; i < testCase.length; i++) {
    if (ascending ^ (pivot < testCase[i])) return "mixed";
    pivot = testCase[i];
  }
  return ascending ? "ascending" : "descending";
}

console.log(solution(input));

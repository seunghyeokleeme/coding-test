const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [testCaseNum, arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

arr = arr.trim().split(" ").map(Number);

function solution(N, testCase) {
  let min = testCase[0];
  let max = testCase[0];
  for (let i = 1; i < N; i++) {
    if (min > testCase[i]) min = testCase[i];
    if (max < testCase[i]) max = testCase[i];
  }

  return `${min} ${max}`;
}

console.log(solution(+testCaseNum, arr));

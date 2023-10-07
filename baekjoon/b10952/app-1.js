const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const testCaseList = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((testCase) => testCase.trim().split(" ").map(Number));

function solution(testCaseArr) {
  const result = [];
  for (let i = 0; i < testCaseArr.length - 1; i++) {
    const [A, B] = testCaseArr[i];
    result[i] = A + B;
  }

  return result.join("\n");
}

console.log(solution(testCaseList));

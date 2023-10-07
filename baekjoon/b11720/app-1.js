const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, arr] = fs.readFileSync(filePath).toString().split("\n");
const newArr = arr.trim().split("").map(Number);

function solution(_, testCaseArr) {
  let result = 0;
  for (const testCase of testCaseArr) {
    result += testCase;
  }
  return result;
}

console.log(solution(+N, newArr));

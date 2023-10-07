const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [testCaseNum, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution(T, testCaseArr) {
  let result = [];
  for (let i = 0; i < T; i++) {
    const testCase = testCaseArr[i].split("");
    let sum = 0;
    let stack = [];
    for (let j = 0; j < testCase.length; j++) {
      if (testCase[j] === "O") {
        sum += stack.length + 1;
        stack.push("0");
      } else {
        stack = [];
      }
    }
    result.push(sum);
  }
  return result.join("\n");
}

console.log(solution(+testCaseNum, arr));

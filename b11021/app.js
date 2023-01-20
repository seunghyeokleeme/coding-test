const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const testCaseNum = +input[0];
const testCaseArr = [];

for (let i = 1; i <= testCaseNum; ++i) {
  const arr = input[i].split(" ").map(item => +item);
  testCaseArr.push(arr);
}

solution(testCaseNum, testCaseArr);
function solution(T, testCaseList) {
  for (let i = 0; i < T; ++i) {
    const testCase = testCaseList[i];
    const A = testCase[0];
    const B = testCase[1];
    console.log(`Case #${i + 1}: ${A + B}`);
  }
}

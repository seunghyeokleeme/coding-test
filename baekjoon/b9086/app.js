const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const testCaseNum = +input[0];
const testCaseArr = [];

for (let i = 1; i <= testCaseNum; ++i) {
  testCaseArr.push(input[i]);
}

solution(testCaseNum, testCaseArr);

function solution(num, testCase) {
  let result = "";
  for (let i = 0; i < num; ++i) {
    result += testCaseArr[i].substr(0, 1) + testCaseArr[i].substr(-1) + "\n";
  }
  console.log(result);
}

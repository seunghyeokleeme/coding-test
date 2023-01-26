const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const testCaseNum = +input[0];

solution(testCaseNum, input);

function solution(num, testCaseArr) {
  let str = "";
  for (let i = 1; i <= num; ++i) {
    let result = 0;
    let sum = 0;
    let testCase = testCaseArr[i];
    testCase = testCase.replaceAll("X", 0).replaceAll("O", 1);
    for (let j = 0; j < testCase.length; ++j) {
      if (testCase[j] === "1") {
        sum += 1;
      }
      if (testCase[j] === "0" || testCase.length - 1 === j) {
        result += (sum * (sum + 1)) / 2;
        sum = 0;
      }
    }
    str += result + "\n";
  }
  console.log(str);
}

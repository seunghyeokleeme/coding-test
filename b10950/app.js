const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const testCaseArr = [];
const testCaseT = +input[0];

for (let i = 1; i <= testCaseT; ++i) {
  const arr = input[i].split(" ").map(item => +item);
  testCaseArr.push(arr);
}

solution(testCaseT, testCaseArr);

function solution(T, testCaseList) {
  for (let i = 0; i < T; ++i) {
    const testCase = testCaseList[i];
    const A = testCase[0];
    const B = testCase[1];
    console.log(A + B);
  }
}

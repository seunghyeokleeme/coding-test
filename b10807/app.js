const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const testCaseArr = input[1].split(" ").map(Number);
const v = +input[2];

solution(testCaseArr, v);

function solution(testCase, findNum) {
  console.log(testCase.filter(item => item === findNum).length);
}

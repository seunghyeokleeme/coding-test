const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const testCaseList = [];
const x = +input[0].split(" ")[1];
const arr = input[1].split(" ").map(item => +item);
const testCaseObj = { x, arr };
testCaseList.push(testCaseObj);

solution(testCaseList);

function solution(testCaseNum) {
  const num = testCaseNum[0].x;
  const testCase = testCaseNum[0].arr;
  console.log(testCase.filter(item => num > item).join(" "));
}

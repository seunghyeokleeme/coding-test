const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const testCaseNum = +input[0];
const arr = [];

for (let i = 1; i <= testCaseNum; ++i) {
  const newArr = input[i].split(" ");
  arr.push(newArr);
}
// 2 [['3', 'ABC'],['5' '/HTP']]
solution(testCaseNum, arr);

function solution(T, testCaseArr) {
  let result = "";
  for (let j = 0; j < T; ++j) {
    const strLength = testCaseArr[j][1].length;
    for (let k = 0; k < strLength; ++k) {
      result += testCaseArr[j][1][k].repeat(+testCaseArr[j][0]);
    }
    result += "\n";
  }
  console.log(result.trim());
}

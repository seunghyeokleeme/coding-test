const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const testCaseT = input[0];
const newArr = [];
for (let i = 1; i <= testCaseT; ++i) {
  newArr.push([input[2 * i - 1], input[2 * i]].map(Number));
}

solution(testCaseT, newArr);
function solution(T, testCaseList) {
  for (let i = 0; i < T; ++i) {
    const baseArr = Array(testCaseList[i][1])
      .fill()
      .map((v, i) => i + 1);
    let result = [...baseArr];
    for (let j = 1; j <= testCaseList[i][0]; ++j) {
      result = result.map((item, idx) =>
        result.slice(0, idx + 1).reduce((pre, cur) => pre + cur, 0)
      );
    }
    console.log(result[result.length - 1]);
  }
}

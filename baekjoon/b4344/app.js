const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const testCaseC = +input[0];
const testCaseArr = [];

for (let i = 1; i <= testCaseC; ++i) {
  const arr = input[i].split(" ").map(Number);
  const num =
    arr.filter((item, idx) => {
      if (idx === 0) return false;
      return item - arr.reduce((acc, cur) => acc + cur - 1) / arr[0] > 0;
    }).length / arr[0];
  testCaseArr.push(num);
}

solution(testCaseArr);

function solution(testCase) {
  console.log(testCase.map(item => (item * 100).toFixed(3)).join("%\n") + "%");
}

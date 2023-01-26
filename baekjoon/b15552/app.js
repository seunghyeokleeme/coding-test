const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const testCaseT = +input[0];

solution(testCaseT, input);

function solution(T, testCaseList) {
  let answer = "";
  for (let i = 1; i <= T; ++i) {
    const arr = input[i].split(" ");
    answer += Number(arr[0]) + Number(arr[1]) + "\n";
  }
  console.log(answer);
}

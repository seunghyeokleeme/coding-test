const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const line = +input[0];
const inputArr = input[1].split("").map(Number);

solution(line, inputArr);

function solution(N, testCase) {
  let sum = 0;
  for (let i = 0; i < N; ++i) {
    sum += testCase[i];
  }
  console.log(sum);
}

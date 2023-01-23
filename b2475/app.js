const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(item => item * item);

solution(input);

function solution(testCase) {
  let result = 0;
  for (let i = 0; i < 5; ++i) {
    result += testCase[i];
  }
  console.log(result % 10);
}

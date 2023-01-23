const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(item => +item);

solution(input[0], input[1]);

function solution(A, B) {
  console.log((A + B) * (A - B));
}

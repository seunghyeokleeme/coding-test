const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(item => +item);

solution(input);

function solution(arr) {
  const newArr = arr.filter(() => true).sort((a, b) => a - b);
  const maxNum = newArr[8];
  console.log(maxNum);
  console.log(arr.indexOf(maxNum) + 1);
}

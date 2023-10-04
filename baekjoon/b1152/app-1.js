const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .filter((item) => item != "");

function solution(arr) {
  console.log(arr.length);
}

solution(input);

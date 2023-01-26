const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .filter(item => item !== "");

solution(input);

function solution(wordArr) {
  console.log(wordArr.length);
}

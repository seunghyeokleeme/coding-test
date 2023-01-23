const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(item => item % 42);

solution(input);

function solution(arr) {
  const reminderSet = new Set(arr);
  console.log(reminderSet.size);
}

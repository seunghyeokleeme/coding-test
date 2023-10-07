const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((i) => +i);

function solution(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] ** 2;
  }
  console.log(result % 10);
}

solution(input);

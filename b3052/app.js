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
  let newArr = arr;
  let num = 0;
  while (true) {
    newArr = newArr.filter(item => newArr[0] !== item);
    num++;
    if (newArr.length === 0) break;
  }
  console.log(num);
}

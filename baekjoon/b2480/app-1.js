const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(item => +item)
  .sort((a, b) => a - b);

let prize = 0;

solution(input);

function solution(arr) {
  if (arr[0] === arr[1] && arr[1] === arr[2]) prize = 10000 + arr[0] * 1000;
  else if (arr[0] === arr[1] || arr[1] === arr[2]) prize = 1000 + arr[1] * 100;
  else prize = arr[2] * 100;

  console.log(prize);
}

/**
 * 1 1
 * 2 3
 * 3 4
 * 9 8
 * 5 2
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; ++i) {
  const arr = input[i].split(" ");
  if (+arr[0] === 0 && +arr[1] === 0) return;
  solution(arr);
}

function solution(testCase) {
  console.log(Number(testCase[0]) + Number(testCase[1]));
}

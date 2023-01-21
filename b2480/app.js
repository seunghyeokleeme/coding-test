const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(item => +item);

const result = solution(input[0], input[1], input[2]);
const [rule, num] = result;
calReward(+rule, +num);

function calReward(count, eye) {
  if (count === 3) console.log(10000 + eye * 1000);
  if (count === 2) console.log(1000 + eye * 100);
  if (count === 1) console.log(eye * 100);
}

function solution(a, b, c) {
  if (a === b) {
    if (b === c) return `3${a}`;
    else return `2${a}`;
  } else if (a === c || b === c) return `2${c}`;
  else {
    if (a > b) {
      if (a > c) return `1${a}`;
      else return `1${c}`;
    } else {
      if (b > c) return `1${b}`;
      else return `1${c}`;
    }
  }
}

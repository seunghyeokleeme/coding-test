/**
 * 3 2
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input.map(item => +item);

function solution(a, b) {
  const strB = String(b);
  const one = +strB[2];
  const ten = +strB[1];
  const hun = +strB[0];
  console.log(a * one);
  console.log(a * ten);
  console.log(a * hun);
  console.log(a * b);
}

solution(input[0], input[1]);

/**
 * baekjoon 문제번호 18108 구현
 * 문제: 불교 -> 서기
 */

const solution = input => {
  let num1 = parseInt(input[0]);
  let num2 = parseInt(input[1]);
  let num3 = parseInt(input[2]);

  let a = num1 + num2;
  let b = (num1 % num3) + (num2 % num3);
  let c = num1 * num2;
  let d = (num1 % num3) * (num2 % num3);
  console.log(a % num3);
  console.log(b % num3);
  console.log(c % num3);
  console.log(d % num3);
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  input = line.split(" ");
  solution(input);
  rl.close();
}).on("close", function () {
  process.exit();
});

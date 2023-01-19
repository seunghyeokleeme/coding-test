/**
 * baekjoon 문제번호 1000번 구현
 * 문제: 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 * 입력: 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
 * 출력: 첫째 줄에 A+B를 출력한다.
 * 예제코드: : node --stack-size=65536 Main.js
 * var fs = require('fs');
   var input = fs.readFileSync('/dev/stdin').toString().split(' ');
   var a = parseInt(input[0]);
   var b = parseInt(input[1]);
   console.log(a+b);
 */

const solution = input => {
  const [a, b] = input;
  const answer = a + b;
  console.log(answer);
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
let list = [];
rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  list = input.split(" ").map(el => parseInt(el));
  solution(list);
  process.exit();
});

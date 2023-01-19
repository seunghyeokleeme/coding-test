/**
 * baekjoon 문제번호 10926 구현
 * 문제: ??!
 */

const solution = input => {
  const id = input[0];
  const answer = id + "??!";
  console.log(answer);
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

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ")[0];
let answer = "";

solution(+input);

function solution(num) {
  for (let i = 1; i <= num; ++i) {
    answer += " ".repeat(num - i) + "*".repeat(i) + "\n";
  }
  console.log(answer);
}

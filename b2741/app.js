const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

solution(+input);

function solution(num) {
  for (let i = 1; i <= num; ++i) {
    console.log(i);
  }
}

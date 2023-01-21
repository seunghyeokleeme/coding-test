const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ")[0];

solution(+input);

function solution(num) {
  for (let i = 1; i <= num; ++i) {
    console.log("*".repeat(i));
  }
}

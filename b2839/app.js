const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

solution(+input);

function solution(N) {
  let count = 0;
  let num = N;
  while (true) {
    if (num % 5 === 0) {
      console.log(num / 5 + count);
      break;
    }

    if (num < 0) {
      console.log(-1);
      break;
    }
    count++;
    num -= 3;
  }
}

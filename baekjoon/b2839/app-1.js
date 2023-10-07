const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(N) {
  let count = 0;
  let num = N;
  while (num > 0 && num % 5) {
    num -= 3;
    count++;
  }
  count += num / 5;
  if (num < 0) return -1;
  return count;
}

console.log(solution(+input));

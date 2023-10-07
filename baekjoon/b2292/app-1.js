const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = +fs.readFileSync(filePath).toString().trim();

function solution(num) {
  let i = 0;
  while (true) {
    if (3 * i ** 2 + 3 * i + 1 >= num) break;
    i++;
  }
  return i + 1;
}
console.log(solution(+input));

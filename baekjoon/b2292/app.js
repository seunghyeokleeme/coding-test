const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = +fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(num) {
  let count = 0;
  while (true) {
    if (num <= 1 + 3 * count * (count + 1)) break;
    count++;
  }
  console.log(count + 1);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(score) {
  const x = ~~(score / 10);
  if (x >= 9) {
    return "A";
  } else if (x === 8) {
    return "B";
  } else if (x === 7) {
    return "C";
  } else if (x === 6) {
    return "D";
  } else {
    return "F";
  }
}

console.log(solution(+input));

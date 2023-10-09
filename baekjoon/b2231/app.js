const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(N) {
  let digit = N.toString().length;
  for (let i = N - digit * 9; i <= N; i++) {
    let sum =
      i +
      i
        .toString()
        .split("")
        .map(Number)
        .reduce((acc, cur) => acc + cur, 0);
    if (sum === N) return i;
  }
  return 0;
}

console.log(solution(+input));

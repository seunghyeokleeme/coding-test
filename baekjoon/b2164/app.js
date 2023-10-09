const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solution(N) {
  if (N === 1) return 1;
  let result = Math.pow(2, Math.floor(Math.log2(N)));
  if (N === result) return N;
  return 2 * (N - result);
}

console.log(solution(+input));

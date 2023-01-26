const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ")[0];

let result = solution(+input);

function solution(N) {
  let sum = 1;
  if (N === 0) return N;
  for (let i = 1; i <= N; ++i) {
    sum *= i;
  }
  return sum;
}

console.log(result);

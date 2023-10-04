const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString();

const [A, B] = input.split(" ").map(Number);
function solution(a, b) {
  console.log(a + b);
}

solution(A, B);

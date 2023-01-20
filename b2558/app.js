/**
 * 1 3
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0], +input[1]);

function solution(a, b) {
  console.log(a + b);
}

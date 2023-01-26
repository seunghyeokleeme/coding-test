const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
input = input.map(item => +item);

console.log(solution(input[0], input[1], "", 0));

function solution(num1, num2, res, stack) {
  if (stack >= 2000) return res;
  res += Math.floor(num1 / num2);
  if (stack == 0) res += ".";
  return solution((num1 % num2) * 10, num2, res, stack + 1);
}

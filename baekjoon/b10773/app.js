const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [K, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(T, testCase) {
  let stack = [];
  let result = 0;
  for (let i = 0; i < T; i++) {
    if (testCase[i] === 0) stack.pop();
    else stack.push(testCase[i]);
  }
  if (stack.length === 0) return result;
  for (let i = 0; i < stack.length; i++) result += stack[i];
  return result;
}

console.log(solution(K, arr));

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [info, arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, X] = info.trim().split(" ").map(Number);
const newArr = arr.trim().split(" ").map(Number);

function solution(T, smallNum, testCase) {
  const result = [];
  for (let i = 0; i < T; i++) {
    if (testCase[i] < smallNum) {
      result.push(testCase[i]);
    }
  }
  return result.join(" ");
}

console.log(solution(N, X, newArr));

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [T, ...arr] = fs.readFileSync(filePath).toString().split("\n");
const newArr = arr.map((item) => item.trim().split(" ").map(Number));

function solution(testCaseNum, testCaseArr) {
  const result = [];
  for (let i = 0; i < testCaseNum; i++) {
    const [A, B] = testCaseArr[i];
    result.push(A + B);
  }
  return result.join("\n");
}

console.log(solution(T, newArr));

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(testCase) {
  const obj = {};
  const arr = testCase.map((num) => num % 42);
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) obj[arr[i]]++;
    else obj[arr[i]] = 1;
  }
  return Object.keys(obj).length;
}

console.log(solution(input));

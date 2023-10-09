const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, arr1, M, arr2] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
arr1 = new Set(arr1.trim().split(" ").map(Number));
arr2 = arr2.trim().split(" ").map(Number);

function solution(solArr, testArr) {
  const result = [];
  for (let i = 0; i < testArr.length; i++)
    result.push(solArr.has(testArr[i]) ? 1 : 0);
  return result.join("\n");
}

console.log(solution(arr1, arr2));

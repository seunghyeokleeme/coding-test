const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const newArr = arr.trim().split(" ").map(Number);

function solution(T, scoreList) {
  let result = 0;
  let M = scoreList[0];
  for (let i = 0; i < T; i++) {
    if (M < scoreList[i]) M = scoreList[i];
  }
  let scoreArr = scoreList.map((score) => (score / M) * 100);
  for (let j = 0; j < T; j++) {
    result += scoreArr[j];
  }
  result /= T;
  if (result.toString().split(".").length === 1) result += ".0";
  return result;
}

console.log(solution(+N, newArr));

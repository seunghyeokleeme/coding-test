const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const newArr = arr.map((testCase) => testCase.trim().split(""));

function solution(T, testCaseList) {
  const result = [];
  for (let i = 0; i < T; i++) {
    let stack = [];
    for (let j = 0; j < testCaseList[i].length; j++) {
      if (testCaseList[i][j] === "(") stack.push(0);
      else if (stack.length > 0) stack.pop();
      else {
        result[i] = "NO";
        break;
      }
    }
    if (stack.length !== 0 || result[i] === "NO") {
      result[i] = "NO";
    } else {
      result.push("YES");
    }
  }

  return result.join("\n");
}

console.log(solution(+N, newArr));

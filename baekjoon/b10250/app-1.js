const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [testCaseNum, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

arr = arr.map((testCase) => testCase.trim().split(" ").map(Number));

function solution(T, testCaseArr) {
  let result = [];
  for (let i = 0; i < T; i++) {
    const [H, _, N] = testCaseArr[i];
    let column = N % H;
    let row = ~~(N / H);
    if (column === 0)
      result[i] = `${H}${row === 0 ? "01" : row > 9 ? row : "0" + row}`;
    else
      result[i] = `${column}${
        row === 0 ? "01" : row + 1 > 9 ? row + 1 : "0" + (row + 1)
      }`;
  }
  return result.join("\n");
}

console.log(solution(+testCaseNum, arr));

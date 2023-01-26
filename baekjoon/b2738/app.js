const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const inputTestCase = [];

for (let i = 1; i <= 2 * N; ++i) {
  const arr = input[i].split(" ").map(Number);
  inputTestCase.push(arr);
}

solution(N, M, inputTestCase);
function solution(row, column, testCase) {
  let result = "";
  for (let i = 0; i < row; ++i) {
    let newArr = [];
    for (let j = 0; j < column; ++j) {
      newArr.push(testCase[i][j] + testCase[row + i][j]);
    }
    result += newArr.join(" ") + "\n";
  }
  console.log(result);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const testCaseList = [];
for (let i = 1; i <= input[0]; ++i) {
  testCaseList.push(input[i].split(" ").map(Number));
}

const solution = testCaseArr =>
  testCaseArr.map(([H, W, N]) => {
    return N % H === 0 ? N / H + 100 * H : Math.ceil(N / H) + (N % H) * 100;
  });

console.log(solution(testCaseList).join("\n").trim());

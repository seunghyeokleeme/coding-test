const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

function solution(testCase) {
  const result = testCase.map((item) =>
    item === item.split("").reverse().join("") ? "yes" : "no"
  );

  return result.join("\n");
}

console.log(solution(input));
// Palindrome

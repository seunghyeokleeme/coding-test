const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")[0]
  .split("");

console.log(input);

solution(input);

function solution(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === "=" || arr[i] === "-") sum++;
    if (i >= 2 && arr[i] === "=" && arr[i - 1] === "z" && arr[i - 2] === "d")
      sum++;
    if (i >= 1 && arr[i] === "j" && (arr[i - 1] === "l" || arr[i - 1] === "n"))
      sum++;
  }
  console.log(arr.length - sum);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];

solution(N, input[1]);

function solution(n, arr) {
  const newarr = arr
    .split(" ")
    .map(item => +item)
    .sort((a, b) => a - b);
  console.log(newarr[0], newarr[n - 1]);
}

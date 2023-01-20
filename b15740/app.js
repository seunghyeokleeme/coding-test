const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input[0].split(" ").map(item => +item);

solution(input);

function solution(num) {
  console.log(num[0] + num[1]);
}

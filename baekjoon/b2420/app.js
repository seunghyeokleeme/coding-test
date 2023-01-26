const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

solution(input);

function solution(arr) {
  let result = input[0] - input[1];
  if (result < 0) result *= -1;
  console.log(result);
}

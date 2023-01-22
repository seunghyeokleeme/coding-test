const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ")[0];

solution(input);

function solution(str) {
  console.log(str.length);
}

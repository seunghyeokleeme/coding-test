const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ")[0];

let result = solution(input);

function solution(score) {
  if (score === "F") return "0.0";
  const [grade, decimal] = score;
  let str = "";
  if (decimal === "-") {
    if (grade === "A") str += 3;
    if (grade === "B") str += 2;
    if (grade === "C") str += 1;
    if (grade === "D") str += 0;
    str += ".7";
  } else {
    if (grade === "A") str += 4;
    if (grade === "B") str += 3;
    if (grade === "C") str += 2;
    if (grade === "D") str += 1;
    if (decimal === "+") str += ".3";
    if (decimal === "0") str += ".0";
  }
  return str;
}

console.log(result);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ")[0];

solution(+input);

function solution(num) {
  const arr = [];

  for (let i = 0; i < num; ++i) {
    arr.push(num - i);
  }
  console.log(arr.join("\n"));
}

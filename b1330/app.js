const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
input = input.map(item => +item);

solution(input);

function solution(arr) {
  const A = arr[0];
  const B = arr[1];
  if (A > B) console.log(">");
  if (A < B) console.log("<");
  if (A === B) console.log("==");
}

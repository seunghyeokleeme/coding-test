const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ")[0];

solution(input);

function solution(str) {
  const arr = [];
  for (let j = 97; j <= 122; ++j) {
    const num = str.indexOf(String.fromCharCode(j));
    arr.push(num);
  }
  console.log(arr.join(" "));
}

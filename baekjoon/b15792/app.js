const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
input = input.map(item => +item);

solution(input);

function solution(num) {
  let result = num[0] / num[1];
  result = result.toString().split(".");
  if (result.length === 1) {
    console.log(result[0]);
    return;
  }
  result = result[0] + ".";
  let m = num[0] % num[1];
  if (m * num[1] < 0) m = -m;
  m = m * 10;
  let d = m / num[1];
  d = d.toString().split(".")[0];
  result = result + d;

  for (let i = 0; i < 1000; ++i) {
    m = m % num[1];
    if (m === 0) break;
    m = m * 10;
    d = m / num[1];
    d = d.toString().split(".")[0];
    result = result + d;
  }
  console.log(result);
}

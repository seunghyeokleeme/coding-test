const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [A, B] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(a, b) {
  let bigNum = a;
  let smallNum = b;
  if (a < b) [bigNum, smallNum] = [smallNum, bigNum];
  let gcd = 1;
  for (let i = smallNum; i >= 1; i--) {
    if (bigNum % i === 0 && smallNum % i === 0) {
      gcd = i;
      break;
    }
  }
  let lcm = (bigNum * smallNum) / gcd;
  return `${gcd}\n${lcm}`;
}

console.log(solution(A, B));

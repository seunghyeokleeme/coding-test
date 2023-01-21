const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ")[0];

solution(+input);

function solution(num) {
  let cycle = 1;
  let newNum = num;
  for (; ; ++cycle) {
    if (newNum < 10) {
      newNum = "0" + newNum;
    }
    let sumStr = Math.floor(newNum / 10) + (newNum % 10);
    sumStr = sumStr.toString();
    newNum = Number(newNum.toString()[1] + sumStr[sumStr.length - 1]);
    if (num === +newNum) break;
  }
  console.log(cycle);
}

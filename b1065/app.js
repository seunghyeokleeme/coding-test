const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

console.log(solution(+input));

function solution(num) {
  let result = 0;
  if (num <= 99) {
    return (result += num);
  } else {
    result += 99;
    for (let i = 100; i <= num; ++i) {
      const newArr = i.toString().split("").map(Number);
      const iStr = i.toString();
      if (iStr.includes(0) && iStr.indexOf(0) !== iStr.length - 1) continue;
      const d = newArr[1] - newArr[0];
      for (let j = 3; j < 1000; ++j) {
        if (newArr[0] + (j - 1) * d !== newArr[j - 1]) break;
        if (j === newArr.length) {
          result++;
          break;
        }
      }
    }
    return result;
  }
}

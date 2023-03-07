const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString();

solution(+input);

function solution(num) {
  let array = [];
  for (let i = 0; i < num; ++i) {
    array.push(" ".repeat(num - (i + 1)) + "*".repeat(2 * (i + 1) - 1));
  }
  const reverseArray = [...array];
  reverseArray.pop();
  reverseArray.reverse();
  array.concat(reverseArray).forEach((i) => console.log(i));
}

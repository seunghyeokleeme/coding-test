const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split().map(Number);

const result = input => {
  let cnt = 0;
  for (let i = 1; i <= input[0]; i++) {
    if (i < 100) {
      cnt++;
    } else if (100 <= i && i < 1000) {
      let iNum = String(i);
      let diff1 = parseInt(iNum[1]) - parseInt(iNum[0]);
      let diff2 = parseInt(iNum[2]) - parseInt(iNum[1]);
      if (diff1 === diff2) {
        cnt++;
      }
    }
  }
  return cnt;
};

console.log(result(input));

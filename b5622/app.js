const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

solution(input);

function solution(word) {
  let sum = 0;
  for (let i = 0; i < word.length; ++i) {
    const num = word.charCodeAt(i) - 65;
    if (num === 18) sum += 5 + 2;
    else if (num === 21) sum += 6 + 2;
    else if (num > 21) sum += 7 + 2;
    else sum += Math.floor(num / 3) + 2;
    sum++;
  }
  console.log(sum);
}

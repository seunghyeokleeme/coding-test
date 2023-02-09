const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);

solution(input[0], input[1], input[2]);

function solution(fixedCost, changeCost, saleCost) {
  const margin = saleCost - changeCost;
  const count = margin <= 0 ? -1 : Math.floor(fixedCost / margin) + 1;
  console.log(count);
}

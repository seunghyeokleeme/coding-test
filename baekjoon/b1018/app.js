const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [info, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const boardInfo = {
  white: "W",
  black: "B",
};

function solution(info, table) {
  const [h, w] = info.trim().split(" ").map(Number);
  let minChanges = Infinity;

  for (let y = 0; y <= h - 8; y++) {
    for (let x = 0; x <= w - 8; x++) {
      minChanges = Math.min(
        minChanges,
        isCheck(x, y, table, true),
        isCheck(x, y, table, false)
      );
    }
  }
  return minChanges;
}

function isCheck(startX, startY, table, boolean) {
  let result = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let current = table[startY + i][startX + j];
      if ((i + j) % 2 === 0) {
        if (current !== (boolean ? boardInfo.white : boardInfo.black)) {
          result++;
        }
      } else {
        if (current !== (boolean ? boardInfo.black : boardInfo.white)) {
          result++;
        }
      }
    }
  }
  return result;
}

console.log(solution(info, arr));

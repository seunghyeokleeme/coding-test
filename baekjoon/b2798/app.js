const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [info, cardList] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.trim().split(" ").map(Number));
const [N, M] = info;

function solution(cardCount, max, cardArr) {
  const result = [];
  for (let i = 0; i < cardCount; i++) {
    for (let j = 1; j < cardCount; j++) {
      for (let r = 2; r < cardCount; r++) {
        if (r <= j || r <= i || j <= i) continue;
        const sum = cardArr[i] + cardArr[j] + cardArr[r];
        if (sum <= max) result.push(sum);
      }
    }
  }
  let pivot = result[0];
  for (let i = 1; i < result.length; i++) {
    if (pivot < result[i]) pivot = result[i];
  }
  return pivot;
}

console.log(solution(N, M, cardList));

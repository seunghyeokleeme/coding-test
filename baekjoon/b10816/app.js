const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, cardList, M, findList] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

cardList = cardList.trim().split(" ").map(Number);
findList = findList.trim().split(" ").map(Number);

function solution(n, cards, m, testCaseList) {
  const cardsInfo = {};
  const result = [];
  for (let i = 0; i < n; i++) {
    let count = cardsInfo[cards[i]];
    cardsInfo[cards[i]] = count ? ++count : 1;
  }

  for (let j = 0; j < M; j++) {
    const item = testCaseList[j];
    const count = cardsInfo[item];
    result.push(count ? count : 0);
  }
  return result.join(" ");
}

console.log(solution(+N, cardList, +M, findList));

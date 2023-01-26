const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input[0].toUpperCase().split("");

const result = solution(arr);

function solution(wordArr) {
  if (wordArr.length === 1) return wordArr[0];
  const charMap = [...new Set(wordArr)];
  const numArr = [];
  for (let i = 0; i < charMap.length; ++i) {
    numArr.push({
      char: charMap[i],
      num: wordArr.filter(item => item === charMap[i]).length,
    });
  }
  numArr.sort((a, b) => b.num - a.num);
  if (numArr[0].num === numArr[1].num) return "?";
  return numArr[0].char;
}

console.log(result);

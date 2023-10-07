const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .toLowerCase()
  .split("");

function solution(word) {
  if (word.length === 1) return word[0];

  const obj = {};
  for (const char of word) {
    obj.hasOwnProperty(char) ? obj[char]++ : (obj[char] = 1);
  }
  const arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  return arr.length > 1 && arr[0][1] === arr[1][1] ? null : arr[0][0];
}

const result = solution(input);
console.log(result ? result.toUpperCase() : "?");

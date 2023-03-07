let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
const A = BigInt(input[0]);
const B = BigInt(input[1]);
let answer = A + B;
console.log(answer.toString());

/* 
BigInt 없이 푼 시도... 다음번에는 조건 꼼꼼히 확인하자!
참고: https://www.acmicpc.net/board/view/99762

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((item) => item.split("").map(Number));

solution(input[0], input[1]);
function solution(arr1, arr2) {
  let newArr = [];
  if (arr1.length > arr2.length) {
    [arr1, arr2] = [arr2, arr1];
  }

  if (arr1.length === arr2.length) {
    newArr = arr1.map((item, idx) => item + arr2[idx]);
  } else {
    newArr = arr1.map(
      (item, idx) => item + (arr2[arr2.length - arr1.length + idx] ?? 0)
    );
    const remainder = arr2.slice(0, arr2.length - arr1.length);
    newArr = [...remainder, ...newArr];
  }

  for (let i = newArr.length - 1; i >= 0; i--) {
    const result = newArr[i] / 10 && Math.floor(newArr[i] / 10);
    newArr[i] %= 10;
    if (i !== 0) newArr[i - 1] += result;
    if (i === 0 && result) newArr.unshift(result);
  }
  console.log(newArr.join(""));
} */

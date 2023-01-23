const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input[0];
const scoreArr = input[1].split(" ").map(item => +item);

solution(N, scoreArr);

function solution(num, arr) {
  const maxScore = Math.max(...arr);
  const newArr = arr.map(item => (item / maxScore) * 100);
  let average = 0;

  for (let i = 0; i < num; ++i) {
    average += newArr[i];
  }
  average /= num;
  if (average.toString().split(".").length === 1) average += ".0";
  console.log(average);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map(item => item.split("").reverse().join(""));

solution(input);

function solution(arr) {
  if (+arr[0] > +arr[1]) {
    console.log(arr[0]);
  } else {
    console.log(arr[1]);
  }
}

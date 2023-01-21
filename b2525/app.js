const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let startTimeArray = input[0].split(" ").map(item => +item);
const startTime = startTimeArray[0] * 60 + startTimeArray[1];
let arr = [];
arr.push(startTime, +input[1]);

solution(arr[0], arr[1]);

function solution(start, requireTime) {
  // [시간 , 분]
  let total = start + requireTime;
  const zeroTime = 24 * 60;
  if (total >= zeroTime) total -= zeroTime;
  const hour = Math.floor(total / 60);
  const minutes = total % 60;
  console.log(hour, minutes);
}

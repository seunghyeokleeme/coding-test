const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
input = input.map(item => +item);

solution(input[0], input[1]);

function solution(currentHour, currentMinutes) {
  const currentTime = currentHour * 60 + currentMinutes;
  let alramTime = currentTime - 45;
  if (alramTime < 0) alramTime = 24 * 60 + alramTime;
  const hour = Math.floor(alramTime / 60);
  const minutes = alramTime % 60;
  console.log(hour, minutes);
}

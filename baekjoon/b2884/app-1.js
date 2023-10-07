const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [hour, min] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(H, M) {
  let back = false;
  const hourToMinutes = 60;
  const prefix = 45;
  let minutes = M;
  let hours = H;
  if (M >= prefix) {
    minutes -= prefix;
  } else {
    minutes += hourToMinutes - prefix;
    back = true;
  }

  if (back) {
    hours--;
    if (hours < 0) hours = 23;
  }

  return `${hours} ${minutes}`;
}

console.log(solution(hour, min));

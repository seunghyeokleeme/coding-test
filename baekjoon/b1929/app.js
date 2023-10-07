const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [M, N] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(min, max) {
  const arr = [];
  for (let i = min; i <= max; i++) {
    if (isPrime(i)) arr.push(i);
  }

  return arr.join("\n");
}

function isPrime(num) {
  if (num === 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(solution(M, N));

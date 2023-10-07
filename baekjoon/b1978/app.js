const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const newArr = arr.trim().split(" ").map(Number);

function solution(T, testCase) {
  let count = 0;
  for (let i = 0; i < T; i++) {
    if (isPrime(testCase[i])) count++;
  }
  return count;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (!(num % i)) return false;
  }
  return true;
}

console.log(solution(+N, newArr));

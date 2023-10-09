const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
arr = arr.map(Number);

function solution(T, testCase) {
  quickSort(testCase, 0, T - 1);
  return testCase.join("\n");
}

function quickSort(A, left, right) {
  if (left < right) {
    const pivotIndex = getRandomInt(left, right);
    const pivotValue = A[pivotIndex];
    [A[left], A[pivotIndex]] = [pivotValue, A[left]];
    let lidx = left + 1;
    let ridx = right;

    while (lidx <= ridx) {
      while (lidx <= ridx && A[lidx] <= pivotValue) lidx++;
      while (lidx <= ridx && A[ridx] >= pivotValue) ridx--;
      if (lidx < ridx) {
        [A[lidx], A[ridx]] = [A[ridx], A[lidx]];
      }
    }
    [A[left], A[ridx]] = [A[ridx], A[left]];

    quickSort(A, left, ridx - 1);
    quickSort(A, ridx + 1, right);
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(solution(+N, arr));

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
arr = arr.map((i) => i.trim().split(" ").map(Number));

function solution(T, testCaseList) {
  quickSort(testCaseList, 0, T - 1);
  return testCaseList.map((item) => `${item[0]} ${item[1]}`).join("\n");
}

function quickSort(A, left, right) {
  if (left < right) {
    const pivotIndex = getRandomInt(left, right);
    const pivot = A[pivotIndex];
    [A[left], A[pivotIndex]] = [pivot, A[left]];
    let lidx = left + 1;
    let ridx = right;

    while (lidx <= ridx) {
      while (
        lidx <= ridx &&
        (A[lidx][0] < pivot[0] ||
          (A[lidx][0] === pivot[0] && A[lidx][1] <= pivot[1]))
      ) {
        lidx++;
      }
      while (
        lidx <= ridx &&
        (A[ridx][0] > pivot[0] ||
          (A[ridx][0] === pivot[0] && A[ridx][1] >= pivot[1]))
      ) {
        ridx--;
      }
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

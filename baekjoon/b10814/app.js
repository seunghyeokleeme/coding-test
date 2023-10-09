const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
arr = arr.map((item, idx) => {
  const x = item.trim().split(" ");
  x[0] = Number(x[0]);
  x[2] = idx;
  return x;
});

function solution(T, testCase) {
  let result = [];
  console.log(testCase);
  quickSort(testCase, 0, T - 1);
  console.log(testCase);
  for (let i = 0; i < T; i++) {
    const [age, username] = testCase[i];
    result[i] = `${age} ${username}`;
  }
  return result.join("\n");
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
          (A[lidx][0] === pivot[0] && A[lidx][2] <= pivot[2]))
      ) {
        lidx++;
      }
      while (
        lidx <= ridx &&
        (A[ridx][0] > pivot[0] ||
          (A[ridx][0] === pivot[0] && A[ridx][2] >= pivot[2]))
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

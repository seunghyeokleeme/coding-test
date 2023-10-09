const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
arr = arr.map((item) => item.trim().split(" ").map(Number));

function solution(T, testCase) {
  const result = Array(T).fill(0);
  for (let i = 0; i < T; i++) {
    let pivot = testCase[i];
    for (let j = 0; j < T; j++) {
      if (pivot[0] < testCase[j][0] && pivot[1] < testCase[j][1]) result[i]++;
    }
    result[i]++;
  }
  return result;
}

console.log(solution(+N, arr));

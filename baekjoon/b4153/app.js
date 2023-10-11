const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.trim().split(" ").map(Number));

function solution(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i][0] * arr[i][1] * arr[i][2])) return result.join("\n");
    const max = Math.max(...arr[i]);
    const idx = arr[i].indexOf(max);
    arr[i].splice(idx, 1);
    result.push(
      arr[i][0] ** 2 + arr[i][1] ** 2 === max ** 2 ? "right" : "wrong"
    );
  }
}

console.log(solution(input));

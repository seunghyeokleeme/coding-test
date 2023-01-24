const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(String);

let str = "";
for (let i = 0; i < N; i++) {
  const arr1 = input[i].split("X").filter(Boolean);
  let sum = 0;
  for (let j = 0; j < arr1.length; j++) {
    const num = arr1[j].length;
    sum += (num * (num + 1)) / 2;
  }
  str += `${sum}\n`;
}
console.log(str.trim());

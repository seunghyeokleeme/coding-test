const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const X = +input[0];
const N = +input[1]; // 5
let arr = [];
arr.push({ N }); // [ {N: 5}]

for (let i = 0; i < N; ++i) {
  const purchaseInfo = {
    price: +input[i + 2].split(" ")[0],
    count: +input[i + 2].split(" ")[1],
  };
  arr.push(purchaseInfo);
}

console.log(arr);

solution(X, arr[0].N, arr);

function solution(price, line, purchaseList) {
  let sum = 0;
  for (let i = 1; i <= line; ++i) {
    sum += purchaseList[i].price * purchaseList[i].count;
  }
  if (price === sum) console.log("Yes");
  else console.log("No");
}

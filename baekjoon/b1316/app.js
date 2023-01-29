const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const testCaseN = +input[0];
const testCaseArr = [];

for (let i = 1; i <= testCaseN; ++i) {
  testCaseArr.push(input[i].split(""));
}

solution(testCaseN, testCaseArr);

function solution(N, testCaseList) {
  let result = 0;
  for (let i = 0; i < N; ++i) {
    const arr = [];
    let newArr = [...testCaseList[i]];
    while (true) {
      if (newArr.length === 0) break;
      arr.push({
        char: newArr[0],
        n: newArr.length - newArr.filter(item => item !== newArr[0]).length,
      });
      newArr = newArr.filter(item => item !== newArr[0]);
    }
    let word = "";
    for (let j = 0; j < arr.length; ++j) {
      word += arr[j].char.repeat(arr[j].n);
    }
    if (word === testCaseList[i].join("")) result++;
  }
  console.log(result);
}

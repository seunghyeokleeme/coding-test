const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(T, testCase) {
  let mySet = new Set();
  const newArr = [...new Set(testCase)];
  for (let i = 0; i < newArr.length; i++) {
    mySet.add(newArr[i].length);
  }
  mySet = [...mySet].sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < mySet.length; i++) {
    const words = newArr.filter((word) => word.length === mySet[i]).sort();
    for (const word of words) {
      result.push(word);
    }
  }

  return result.join("\n");
}

console.log(solution(+N, arr));

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [T, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const testCaseArr = input.map((item) => {
  const testCase = item.trim().split(" ");
  testCase[0] = +testCase[0];
  return testCase;
});

function solution(T, testCaseArr) {
  let result = [];
  for (let i = 0; i < T; i++) {
    const count = testCaseArr[i][0];
    const charArr = testCaseArr[i][1].split("");
    let sentence = "";
    for (let j = 0; j < charArr.length; j++) {
      sentence += charArr[j].repeat(count);
    }
    result[i] = sentence;
  }
  return result.join("\n");
}

console.log(solution(T, testCaseArr));

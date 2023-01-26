/**
 * baekjoon 문제번호 1000번 구현
 * 문제: 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 * 입력: 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
 * 출력: 첫째 줄에 A+B를 출력한다.
 * 예제코드: : node --stack-size=65536 Main.js
 * var fs = require('fs');
   var input = fs.readFileSync('/dev/stdin').toString().split(' ');
   var a = parseInt(input[0]);
   var b = parseInt(input[1]);
   console.log(a+b);

   5
   5 50 50 70 80 100
   7 100 95 90 80 70 60 50
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();
console.log(input);
input = input.split("\n");

const inputC = +input[0];
const inputTestCase = [];

for (let i = 1; i <= inputC; ++i) {
  const arr = input[i].split(" ").map(item => +item);
  const newArr = [];
  for (let i = 1; i <= arr[0]; ++i) {
    newArr.push(arr[i]);
  }
  const testCase = {
    N: arr[0],
    arr: newArr,
  };
  inputTestCase.push(testCase);
}

console.log(inputTestCase);

function solution(C, testCaseNum) {}

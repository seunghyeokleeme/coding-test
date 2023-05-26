/*
자연수 뒤집어 배열로 만들기
https://school.programmers.co.kr/learn/courses/30/lessons/12932
*/

// 1

function solution(n) {
  return n.toString().split("").reverse().map(Number);
}

// 2

function solution(n) {
  return (n + "").split("").reverse().map(Number);
}

// 3

function solution3(n) {
  return Array.from(n.toString()).map(Number).reverse();
}

//4
function solution(n) {
  if (n === 0) return [0];

  let answer = [];
  while (n != 0) {
    answer.push(n % 10);
    // push 메소드 말고 다른 방법은 ...?
    n = Math.floor(n / 10);
  }
  return answer;
}

// 5
function solution(n) {
  if (n === 0) return [0];

  let len = Math.floor(Math.log10(n)) + 1;
  let answer = new Array(len);

  for (let i = 0; i < len; i++) {
    answer[i] = n % 10;
    n = Math.floor(n / 10);
  }
  return answer;
}

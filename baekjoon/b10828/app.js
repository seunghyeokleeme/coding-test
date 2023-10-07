const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const newArr = arr.map((command) => command.trim().split(" "));

function solution(N, commandList) {
  const result = [];
  const stack = [];
  for (let i = 0; i < N; i++) {
    let command = commandList[i];
    if (command[0] === "push") {
      stack.push(+command[1]);
    } else if (command[0] === "pop") {
      result.push(stack.length ? stack.pop() : -1);
    } else if (command[0] === "size") {
      result.push(stack.length);
    } else if (command[0] === "empty") {
      result.push(!stack.length ? 1 : 0);
    } else {
      result.push(stack.length ? stack[stack.length - 1] : -1);
    }
  }
  return result.join("\n");
}
console.log(solution(+n, newArr));

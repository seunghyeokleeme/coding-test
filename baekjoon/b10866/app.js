const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
arr = arr.map((item) => {
  const command = item.trim().split(" ");
  if (command.length !== 1) command[1] = +command[1];
  return command;
});

function solution(T, commandList) {
  const result = [];
  const deque = [];
  for (let i = 0; i < T; i++) {
    const [command, num] = commandList[i];
    if (command === "push_front") {
      deque.unshift(num);
    } else if (command === "push_back") {
      deque.push(num);
    } else if (command === "pop_front") {
      result.push(deque.length ? deque.shift() : -1);
    } else if (command === "pop_back") {
      result.push(deque.length ? deque.pop() : -1);
    } else if (command === "size") {
      result.push(deque.length);
    } else if (command === "empty") {
      result.push(!deque.length ? 1 : 0);
    } else if (command === "front") {
      result.push(deque.length ? deque[0] : -1);
    } else {
      result.push(deque.length ? deque[deque.length - 1] : -1);
    }
  }
  return result.join("\n");
}

console.log(solution(+N, arr));

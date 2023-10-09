const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...arr] = fs.readFileSync(filePath).toString().split("\n");
arr = arr.map((item) => {
  const command = item.trim().split(" ");
  if (command.length !== 1) command[1] = +command[1];
  return command;
});

function solution(T, commandList) {
  const queue = [];
  const result = [];
  for (let i = 0; i < T; i++) {
    const [command, num] = commandList[i];
    if (command === "pop") {
      const item = queue.length ? queue.shift() : -1;
      result.push(item);
    } else if (command === "size") {
      result.push(queue.length);
    } else if (command === "empty") {
      const item = !queue.length ? 1 : 0;
      result.push(item);
    } else if (command === "front") {
      const item = queue.length ? queue[0] : -1;
      result.push(item);
    } else if (command === "back") {
      const item = queue.length ? queue[queue.length - 1] : -1;
      result.push(item);
    } else {
      queue.push(num);
    }
  }
  return result.join("\n");
}

console.log(solution(+N, arr));

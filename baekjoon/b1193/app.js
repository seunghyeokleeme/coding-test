const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = +fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(x) {
  let line = 1;

  while (true) {
    if (x <= (line * (line + 1)) / 2) break;
    line++;
  }
  const order = (line * (line + 1)) / 2 - x;
  if (line % 2) {
    console.log(`${order + 1}/${line - order}`);
  } else {
    console.log(`${line - order}/${order + 1}`);
  }
}

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
  const a = order + 1;
  const b = line - order;
  console.log(line % 2 ? `${a}/${b}` : `${b}/${a}`);
}

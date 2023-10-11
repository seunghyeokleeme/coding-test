const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [firstLine, ...rest] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [N, M] = firstLine.split(" ").map(Number);

let desires = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= N; i++) {
  const [, ...prefs] = rest[i - 1].split(" ").map(Number);
  desires[i] = prefs;
}

let d = Array.from({ length: N + 1 }, () => 0);
let b = Array.from({ length: M + 1 }, () => 0);
let visit = Array.from({ length: N + 1 }, () => false);

function dfs(a) {
  if (visit[a]) return false;
  visit[a] = true;

  for (let barn of desires[a]) {
    if (!b[barn] || dfs(b[barn])) {
      d[a] = barn;
      b[barn] = a;
      return true;
    }
  }
  return false;
}

let match = 0;
for (let i = 1; i <= N; i++) {
  visit.fill(false);
  if (dfs(i)) match++;
}

console.log(match);

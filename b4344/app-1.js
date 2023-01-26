let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\n");
const C = input.shift();
// reduce() 문제

const getAverage = (N, scores) => scores.reduce((acc, cur) => acc + cur, 0) / N;

const printAverageRatio = input => {
  return input.reduce((acc, cur) => {
    cur = cur.split(" ").map(v => +v);
    const [N, scores] = [cur.shift(), cur];
    const average = getAverage(N, scores);
    acc +=
      ((scores.filter(v => v > average).length / N) * 100).toFixed(3) + "%\n";
    return acc;
  }, "");
};

console.log(printAverageRatio(input));

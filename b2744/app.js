const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ")[0];

solution(input);

function solution(str) {
  let result = "";
  for (let i = 0; i < str.length; ++i) {
    const charAsciiCode = str.charCodeAt(i);
    if (charAsciiCode < 97) result += String.fromCharCode(charAsciiCode + 32);
    if (charAsciiCode >= 97) result += String.fromCharCode(charAsciiCode - 32);
  }
  console.log(result);
}

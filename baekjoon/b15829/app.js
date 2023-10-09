const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, word] = fs.readFileSync(filePath).toString().trim().split("\n");

function calculateHash(str) {
  const r = 31;
  const M = 1234567891;
  let hashValue = 0;
  let rPower = 1;

  for (let i = 0; i < str.length; i++) {
    const charValue = str.charCodeAt(i) - "a".charCodeAt(0) + 1;
    hashValue = (hashValue + charValue * rPower) % M;
    rPower = (rPower * r) % M;
  }

  return hashValue;
}

console.log(calculateHash(word));

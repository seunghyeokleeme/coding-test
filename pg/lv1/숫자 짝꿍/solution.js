// 시간복잡도 O(N)
function solution(X, Y) {
  const freqMap = new Map();
  for (const num of Y) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  let result = "";
  for (const num of X) {
    if (freqMap.get(num) > 0) {
      result = num + result;
      freqMap.set(num, freqMap.get(num) - 1);
    }
  }

  if (result.length === 0) return "-1";
  if (parseInt(result) === 0) return "0";
  return result
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

// O(nlogn) 방식
function solution(X, Y) {
  const count = new Array(10).fill(0);
  for (let i = 0; i < Y.length; i++) {
    count[Y[i]]++;
  }

  let result = "";
  for (const num of X) {
    if (count[num] > 0) {
      result = num + result;
      count[num]--;
    }
  }

  if (result.length === 0) return "-1";
  if (!parseInt(result)) return "0";
  return result
    .split("")
    .sort((a, b) => b - a)
    .join(""); /*마지막 return 문에서만 O(nlogn) 입니다*/
}

// 숏코딩 스타일
function solution(X, Y) {
  const count = new Array(10).fill(0);
  [...Y].forEach((y) => count[parseInt(y)]++);
  const result = [...X]
    .filter((x) => count[parseInt(x)]-- > 0)
    .sort((a, b) => b - a)
    .join("");
  return result.length ? (parseInt(result) ? result : "0") : "-1";
}

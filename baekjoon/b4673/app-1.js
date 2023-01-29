const inputArr = Array(10000)
  .fill()
  .map((item, idx) => idx + 1);

solution(inputArr);

function solution(arr) {
  const newArr = [...arr];
  for (let i = 0; i < arr.length; ++i) {
    const sum =
      arr[i] +
      Number(
        arr[i]
          .toString()
          .split("")
          .reduce((acc, cur) => Number(acc) + Number(cur))
      );
    if (sum <= 10000) newArr[sum - 1] = false;
  }
  console.log(
    newArr
      .filter(item => typeof item === "number")
      .join("\n")
      .trim()
  );
}

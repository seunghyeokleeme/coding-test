solution();

function solution() {
  const nowTime = new Date().getTime();
  const koreaTimeDiff = 9 * 60 * 60 * 1000;
  const koreaNow = new Date(nowTime + koreaTimeDiff);
  console.log(koreaNow.toISOString().split("T")[0]);
}

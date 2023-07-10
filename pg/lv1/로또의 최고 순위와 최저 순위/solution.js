function solution(lottos, win_nums) {
  let score = 0;
  const zero = lottos.filter((num) => num === 0).length;
  for (let i = 0; i < win_nums.length; i++) {
    if (lottos.find((num) => num === win_nums[i])) score++;
  }
  if (score === 0 && zero === 0) return [6, 6];
  return [7 - (score + zero), score === 0 ? 6 : 7 - score];
}

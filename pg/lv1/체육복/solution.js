function solution(n, lost, reserve) {
  let lostArr = lost.filter((a) => !reserve.includes(a));
  let reserveArr = reserve.filter((a) => !lost.includes(a));

  let answer = n - lostArr.length;

  lostArr.sort((a, b) => a - b);
  reserveArr.sort((a, b) => a - b);

  for (const size of lostArr) {
    const pre = reserveArr.indexOf(size - 1);
    const post = reserveArr.indexOf(size + 1);
    if (pre !== -1) {
      reserveArr.splice(pre, 1);
      answer++;
    } else if (post !== -1) {
      reserveArr.splice(post, 1);
      answer++;
    }
  }
  return answer;
}

// 두번째 풀이
function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  lost = lost.filter((a) => !reserve.includes(a));
  reserve = reserve.filter((a) => !lost.includes(a));

  return (
    n -
    lost.filter((size) => {
      let num = reserve.find((res) => Math.abs(res - size) <= 1);
      if (!num) return true;
      reserve = reserve.filter((res) => res !== num);
    }).length
  );
}

//세번째 풀이
function solution(n, lost, reserve) {
  let students = Array(n).fill(1);
  // 체육복을 잃어버린 학생 처리
  lost.forEach((v) => students[v - 1]--);
  // 여벌 체육복을 가지고 있는 학생 처리
  reserve.forEach((v) => students[v - 1]++);

  students.forEach((v, i) => {
    // 이 학생의 바로 앞에 여별의 체육복을 가진 학생이 있으면 세비지 합니다.
    if (!v && students[i - 1] === 2) {
      students[i - 1]--;
      students[i]++;
    } else if (!v && students[i + 1] === 2) {
      // 이 학생의 바로 뒤에 여별의 체육복을 가진 학생이 있으면 세비지 합니다.
      students[i + 1]--;
      students[i]++;
    }
  });

  return students.filter((v) => v > 0).length;
}

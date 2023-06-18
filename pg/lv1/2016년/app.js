// https://school.programmers.co.kr/learn/courses/30/lessons/12901 
function solution(a, b) {
    const date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const day = ["THU","FRI","SAT","SUN","MON","TUE","WED"]
    let total = 0;
    if(a === 1) total = b;
    else {
        total = [...date.slice(0, a-1), b].reduce((acc, cuv) => acc + cuv, 0);
    }
    return day[total % 7];
}

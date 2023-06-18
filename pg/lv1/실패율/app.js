// https://school.programmers.co.kr/learn/courses/30/lessons/42889
function solution(N, stages) {
    const arr = [];
    for(let i=1; i <= N; i++){
        let failureRate = stages.filter(num => num === i).length / stages.filter(num => num >= i).length;
        arr.push({stage: i, failureRate})
    }
    return arr.sort((a, b) => b.failureRate - a.failureRate).map(item => item.stage);
}
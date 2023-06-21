/*
* https://school.programmers.co.kr/learn/courses/30/lessons/135808
*/
function solution(k, m, score) {
    score.sort((a, b) => b - a);
    
    return score.reduce((sum, currentScore, i) => i % m === m - 1 ? sum + currentScore * m : sum, 0);
}

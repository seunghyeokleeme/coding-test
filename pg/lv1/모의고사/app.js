// https://school.programmers.co.kr/learn/courses/30/lessons/42840
function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    const scores = patterns.map(pattern => 
        answers.filter((answer, i) => answer === pattern[i % pattern.length]).length
    );
    const maxScore = Math.max(...scores);
    return scores.flatMap((score, i) => (score === maxScore ? i + 1 : []));
}

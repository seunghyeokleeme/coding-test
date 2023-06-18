// https://school.programmers.co.kr/learn/courses/30/lessons/159994
function solution(cards1, cards2, goal) {
    for(let i=0; i < goal.length; i++){
        if(goal[i] !== cards1[0] && goal[i] !== cards2[0]) return "No";
        if(goal[i] === cards1[0]) cards1.shift();
        if(goal[i] === cards2[0]) cards2.shift();
    }
    return "Yes";
}
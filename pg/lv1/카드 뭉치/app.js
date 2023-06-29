// https://school.programmers.co.kr/learn/courses/30/lessons/159994
function solution(cards1, cards2, goal) {
    for(let i=0; i < goal.length; i++){
        if(goal[i] !== cards1[0] && goal[i] !== cards2[0]) return "No";
        if(goal[i] === cards1[0]) cards1.shift();
        if(goal[i] === cards2[0]) cards2.shift();
    }
    return "Yes";
}

// 두번째 풀이방법
const solution = (cards1, cards2, goal) => goal.every(word => word === cards1[0] ? cards1.shift() : word === cards2[0] ? cards2.shift() : false) ? "Yes" : "No";

// 세번째 풀이방법
function solution(cards1, cards2, goal) {
    let c1 = [...cards1];
    let c2 = [...cards2];
    
    for(const word of goal){
        if(word !== c1[0] && word !== c2[0]) return "No"
        if(word === c1[0]) c1 = c1.slice(1);
        if(word === c2[0]) c2 = c2.slice(1);
    }
    return "Yes";
}

// 네번째 풀이방법
function solution(cards1, cards2, goal) {
    let c1 = [...cards1], c2 = [...cards2];
    
    for(const word of goal){
        if(word !== c1[0] && word !== c2[0]) return "No"
        if(word === c1[0]) [, ...c1] = c1;
        if(word === c2[0]) [, ...c2] = c2;
    }
    return "Yes";
}

// 다섯번째 풀이방법
function solution(cards1, cards2, goal) {
    for(const word of goal){
        if(word === cards1[0]) {
            cards1.splice(0, 1);
        } else if(word === cards2[0]){
            cards2.splice(0, 1);
        }else{
            return "No";
        }
    }
    return "Yes"
}

// https://school.programmers.co.kr/learn/courses/30/lessons/138477 
// 시간복잡도 고려한 풀이
function solution(k, score) {
    let result = [], arr = [];
    for(const today of score){
        arr.push(today);
        arr.sort((a, b) => a - b);
        if(arr.length > k) arr.shift();
        result.push(arr[0]);
    }
    return result;
}
/*
function solution(k, score) {
    let result = [];
    for(let i=0; i < score.length; i++){
        let arr = score.slice(0, i+1).sort((a, b) => b - a);
        if(arr.length <= k) result = [...result, arr[i]];
        else result = [...result, arr[k-1]];
    }
    return result;
}
*/

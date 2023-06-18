// https://school.programmers.co.kr/learn/courses/30/lessons/138477 
function solution(k, score) {
    let result = [];
    for(let i=0; i < score.length; i++){
        let arr = score.slice(0, i+1).sort((a, b) => b - a);
        if(arr.length <= k) result = [...result, arr[i]];
        else result = [...result, arr[k-1]];
    }
    return result;
}
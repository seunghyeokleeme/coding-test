function solution(left, right) {
    let answer = 0;
    for(let j=left; j <= right; j++){
        answer += (measure(j) % 2 === 0 ? j : -j);
    }
    return answer;
}

function measure(n){
    let count = 0;
    for(let i=1; i <=n; i++){
        if(n % i === 0) count++;
    }
    return count;
}

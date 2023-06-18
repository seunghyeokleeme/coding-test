// https://school.programmers.co.kr/learn/courses/30/lessons/12921
function solution(n) {
    let count = 0;
    for(let i=1; i <= n; i++){
        if(isPrime(i)){
            count++;
        }
    }
    return count;
}

function isPrime(num){
    if(num === 1) return 0;
    if(num === 2) return 1;
    if(num % 2 === 0) return 0;
    for(let i=3; i <= Math.sqrt(num); i+=2){
        if(num % i === 0) return 0;
    }
    return 1;
}
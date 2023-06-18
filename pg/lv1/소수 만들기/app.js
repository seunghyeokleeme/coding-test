// https://school.programmers.co.kr/learn/courses/30/lessons/12977
function solution(nums) {
    let count = 0;
    for(let i = 0; i < nums.length-2; i++){
        for(let j = i+1; j < nums.length-1; j++){
            for(let k = j+1; k < nums.length; k++){
                if(isPrime(nums[i]+nums[j]+nums[k])){
                    count++;
                }
            }
        }
    }
    return count;
}

function isPrime(num) {
    if(num % 2 === 0) return 0;
    for(let i = 3; i*i <= num; i++) {
        if(num % i === 0) return 0;
    }
    return 1;
}
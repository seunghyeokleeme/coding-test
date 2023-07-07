function solution(number, limit, power) {
    const result = Array.from({length: number}, (_, i) => getDivisors(i+1));
    return result.reduce((acc, cur) =>acc + (cur > limit ? power: cur), 0);
    
}

function getDivisors(num){
    let count = 0;
    for(let i=1; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            count++;
            if(num / i !== i) count++;
        }
    }
    return count;
}

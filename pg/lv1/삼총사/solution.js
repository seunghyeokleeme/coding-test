function solution(number) {
    let count = 0;
    for(let i=0; i < number.length; i++){
        for(let j=0; j < number.length; j++){
            for(let k=0; k < number.length; k++){
                if(i===j || i===k || j===k) continue;
                if(number[i]+number[j]+number[k] === 0) count++;
            }
        }
    }
    return count/6;
}

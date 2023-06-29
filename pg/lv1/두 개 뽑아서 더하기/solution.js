function solution(numbers) {
    let answer = [];
    const arr = numbers.sort((a, b) => a - b);
    for(let i=0; i < arr.length; i++){
        for(let j=0; j < arr.length; j++){
            if(i===j) continue;
            answer.push(arr[i] + arr[j]);
        }
    }
    
    return answer.sort((a, b) => a - b).filter((item, idx) => item !== answer[idx+1] );
}

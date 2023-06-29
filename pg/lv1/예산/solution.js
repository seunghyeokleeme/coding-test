function solution(d, budget) {
    const arr = [...d].sort((a, b) => a - b);
    let total = 0, count = 0;
    for(let i=0; i < arr.length; i++){
        total += arr[i];
        if(total > budget) break;
        count++;
        
    }
    return count;
}

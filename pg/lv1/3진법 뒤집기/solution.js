function solution(n) {
    let x = n;
    let arr = [];
    do{
        arr.push(x % 3);
        x = ~~(x / 3);
    }while(x / 3);
    
    let result = 0;
    for(let i=0; i < arr.length; i++){
        result += arr[i] * (3** (arr.length-1-i));
    }
    return result;
}

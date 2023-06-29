function solution(t, p) {
    const arr = [];
    for(let i=0; i <= t.length - p.length; i++){
        arr.push(+t.slice(i, p.length+i));
    }
    return arr.filter(item => item <= +p).length;
 
}

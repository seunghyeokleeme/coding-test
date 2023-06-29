function solution(sizes) {
    const arr = sizes.map((item) => item.sort((a, b) => b - a));
    const w = [], h = [];
    for(let i = 0; i < sizes.length; i++){
        w.push(arr[i][0]);
        h.push(arr[i][1]);
    }
    return Math.max(...w) * Math.max(...h);
}

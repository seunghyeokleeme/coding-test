function solution(arr1, arr2) {
    const matrix = [];
    for(let i=0; i < arr1.length; i++){
        let arr = [];
        for(let j=0; j < arr1[i].length; j++){
            arr.push(arr1[i][j] + arr2[i][j]);
        }
        matrix.push(arr);
    }
    return matrix;
}

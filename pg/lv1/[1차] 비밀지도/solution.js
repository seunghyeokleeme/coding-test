function solution(n, arr1, arr2) {
const answer = [];
for (let i = 0; i < n; i++) {
    const strLine = (arr1[i] | arr2[i]);
    const arrLine = strLine.toString(2).padStart(n, '0')
    const decLine = arrLine.replaceAll("0", " ").replaceAll("1", "#")
    answer.push(decLine)
}
return answer;
}

function solution(n)
{
    const answer = n.toString().split("").map(Number).reduce((acr, cur) => acr + cur);
    return answer;
}

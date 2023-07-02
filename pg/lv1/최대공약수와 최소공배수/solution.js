function solution(n, m) {
    const input = [n, m].sort((a, b) => b - a);
    let gcdResult = gcd(input[0],input[1]);
    let lcm = n * m / gcdResult;
    return [gcdResult, lcm];
    
}

function gcd(a, b){
    if(a % b === 0) return b;
    else return gcd(b, a% b);
}

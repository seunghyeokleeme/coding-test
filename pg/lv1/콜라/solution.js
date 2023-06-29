/* function solution(a, b, n) {
    let total = 0;
    let init = n;
    while(~~(init / a) !== 0){
        let take = ~~(init / a) * b;
        total += take;
        init += take - a * (~~(init / a));
    }
    return total;
}
*/

const solution = (a, b, n) => ~~((n - b) / (a - b))*b;

function solution(s) {
   const arr = s.split(" ");
    const answer = arr.map(v => {
        let str = "";
        for(let i=0; i< v.length; i++){
            if(i % 2 === 0){
                str += v[i].toUpperCase();
            }else {
                str += v[i].toLowerCase();
            }
        }
        return str;
    })
    return answer.join(" ");
}

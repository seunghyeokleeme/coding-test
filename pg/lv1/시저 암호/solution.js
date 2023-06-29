function solution(s, n) {
    const arr = s.split("");
    const result = arr.map(item => {
        if(item === " ") return item;
        let code = item.charCodeAt(0);
        if(code >= 65 && code <= 90){
            if(code + n  > 90){
                return String.fromCharCode(65 + code+n - 90-1)
            }else {
                return String.fromCharCode(code + n);
            }
        }else {
            if(code + n > 122){
                return String.fromCharCode(97 + code + n -122 -1)
            }else{
                return String.fromCharCode(code + n);
            }
        }
    })
    return result.join("")
}

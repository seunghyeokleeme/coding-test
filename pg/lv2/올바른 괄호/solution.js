// 첫번째 해결방법
function solution(s){
    const arr = Array.from(s);
    const stack = [];
    if(arr[0] === ")" || (arr.length & 1) || arr[arr.length-1] === "(") return false;
    for(let i=0; i < arr.length; i++){
        if(stack.length === 0){
            if(arr[i] === "("){
                stack.push("(");
                continue;
            }else{
                return false;
            }
        }
        
        if(arr[i] === ")"){
            stack.pop();
        } else {
            stack.push("(");
        }
    }
    return !stack.length;
}
// 두번째 해결방법
function solution(s){
    if(!s.length) return false;
    let startCount = 0;
    for(let i =0; i < s.length ; i++){
        if(s.substring(i,i+1) === "("){
            startCount++;
        }else if(startCount > 0){
            startCount--;
        }else{
            return false;
        }
    }
    return !startCount;
}
// 세번째 해결방법
function solution(s) {
    let openParCount = 0;

    for (const char of s) {
        if (char === '(') openParCount++;
        else openParCount--;

        if (openParCount < 0) return false;
    }
    return openParCount === 0;
}
// 네번째 해결방법
function solution(s){
    const stack = new Stack();
    for(let value of Array.from(s)){
        if(stack.length() === 0 && value === ")") return false;
        if(value === "(") stack.push("(");
        else stack.pop();
    }
    return !stack.length();
}

class Stack {
    #array;
    constructor(array = []){
        this.#array = array;
    }
    push(value){
        return this.#array.push(value);
    }
    pop(){
        return this.#array.pop();
    }
    length(){
        return this.#array.length;
    }
}

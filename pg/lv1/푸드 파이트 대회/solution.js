function solution(food) {
    let result = "";
    for(let i=1; i < food.length; i++){
        result+= (i).toString().repeat(~~(food[i] / 2));
    }
    return result + "0" + result.split("").reverse().join("");
}

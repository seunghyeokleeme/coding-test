// https://school.programmers.co.kr/learn/courses/30/lessons/17682
function solution(dartResult) {
    let score = [0, 0, 0];
    let idx = -1;
    for (let i=0; i < dartResult.length; i++){
        if(!isNaN(dartResult[i])) {
            idx++;
            if(dartResult[i] === "1" && dartResult[i+1] === "0"){
                score[idx] = 10;
                i++;
            }else{
                score[idx] = parseInt(dartResult[i], 10);
            }
        }else if(dartResult[i] === "S"){
            score[idx] = Math.pow(score[idx], 1);
        }else if(dartResult[i] === "D"){
            score[idx] = Math.pow(score[idx], 2);
        }else if(dartResult[i] === "T"){
            score[idx] = Math.pow(score[idx], 3);
        }else if(dartResult[i] === "*"){
            score[idx] *= 2;
            if(idx > 0) score[idx-1] *= 2;
        }else if(dartResult[i] === "#"){
            score[idx] *= (-1);
        }
    }
    
    return score.reduce((acc, cuv) => acc + cuv);
}
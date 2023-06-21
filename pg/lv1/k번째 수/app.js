function solution(array, commands) {
    let result = [];
    for(let i=0; i < commands.length; i++){
        const arr = array.slice(commands[i][0]-1, commands[i][1]);
        result.push(arr.sort((a, b) => a - b)[commands[i][2]-1])
    }
    return result;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/72410
function solution(new_id) {
    new_id = new_id.toLowerCase()
                      .replace(/[^\w-_.]/g, '')
                      .replace(/\.{2,}/g, '.')
                      .replace(/^\.|\.$/g, '');
                      
    new_id = new_id.length === 0 ? 'a' : new_id;
    new_id = new_id.length >= 16 ? new_id.slice(0, 15).replace(/\.$/, '') : new_id;
    
    while(new_id.length <= 2) 
        new_id += new_id.charAt(new_id.length-1);
        
    return new_id;
}
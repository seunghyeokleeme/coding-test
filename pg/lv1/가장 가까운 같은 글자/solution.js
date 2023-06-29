const solution = (s) => s.split("").map((char, idx) => {
    if(idx === 0 || s.lastIndexOf(char, idx-1) === -1) return -1;
    return idx - s.lastIndexOf(char, idx-1)});

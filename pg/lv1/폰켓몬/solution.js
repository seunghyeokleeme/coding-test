function solution(nums) {
    const pocketType = new Set(nums).size;
    const chooseNumber = nums.length / 2;
    return pocketType > chooseNumber ? chooseNumber : pocketType;
}

class Solution {
    public int solution(int[] array, int height) {
        int answer = 0;
        for(int studentHeight : array){
            if(studentHeight > height){
                answer++;
            }
        }
        return answer;
    }
}

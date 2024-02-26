class Solution {
    public int[] solution(int number1, int denom1, int number2, int denom2) {
        int[] numbers = { number1 * denom2, denom1 * denom2, number2 * denom1, denom1 * denom2 };
        
        int[] answer = { numbers[0] + numbers[2], numbers[1]};
        
        int max = answer[0], min = answer[1];
        int tmp;
        
        if(max < min) {
            tmp = max;
            max = min;
            min = tmp;
        }
        
        int gcd = getGCD(max, min);
        answer[0] = answer[0] / gcd;
        answer[1] = answer[1] / gcd;
        
        return answer;
    }
    
    public int getGCD(int num1, int num2) {
        if (num1 % num2 == 0) {
            return num2;
        }
        return getGCD(num2, num1 % num2);
    }
}

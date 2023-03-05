num1 = int(input())
num2 = input()

array = [num1 * int(i) for i in num2]
array.reverse()
for i in array:
    print(i)

print(num1 * int(num2))

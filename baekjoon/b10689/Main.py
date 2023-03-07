A, B = map(int, input().split())


def solution(a: int, b: int):
    add = a + b
    minus = a - b
    multiply = a * b
    divide = a // b
    reminder = a % b
    return add, minus, multiply, divide, reminder


for i in solution(A, B):
    print(i)

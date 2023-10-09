#include <stdio.h>

int N, i, num, count[10001] = {0};

int main()
{
    scanf("%d", &N);
    while (N--)
    {
        scanf("%d", &num);
        count[num]++;
    }
    for (i = 1; i <= 10000; i++)
    {
        while (count[i]--)
        {
            printf("%d\n", i);
        }
    }
    return 0;
}
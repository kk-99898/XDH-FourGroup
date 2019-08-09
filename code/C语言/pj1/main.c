#include <stdio.h>

int min(int a, int b)
{
    if (a<b){
        return a;
    }else{
        return b;
    }
}

int main(void)
{
    int x = 2;
    int y = 5;
    int minnum = min(x, y);
    printf("The min number is %d \n", minnum);
    return 0;


}

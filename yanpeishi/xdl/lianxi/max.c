#include<stdio.h>

int max(int a, int b, int c)
{
    if(a>b&&a>c){
        return a;
	
    }else if(b>c){
        return b;
    }else{
        return c;
    }


}

int main()
{ 
    int a1,b1,c1;
    scanf("%d\n",&a1);
    scanf("%d\n",&b1);
    scanf("%d\n",&c1);
    
    printf("%d\n",max(a1,b1,c1));
    return 0;

}

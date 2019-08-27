#include<stdio.h>

int main()
{
    int a;
    scanf("%d",&a);
    int b;
    scanf("%d",&b);
    int c;
    scanf("%d",&c);
    
    if(a>b&&a>c){
        printf("%d\n",a);
    } else if(b>c){
        printf("%d\n",b);
    }
      else{
        printf("%d\n",c);
    }
    
    return 0;


}

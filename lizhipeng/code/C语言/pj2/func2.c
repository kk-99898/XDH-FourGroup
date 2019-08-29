int main()
{
    int a;
    int b;
    int c;
    int temp;
    scanf("%d",&a);
    scanf("%d",&b);
    scanf("%d",&c);

    if (a>b){
        temp = b;
        b = a;
        a = temp;
    }
    if (a>c){
        temp = c;
        c = a;
        a = temp;
    }
    if (b>c){
        temp = c;
        c = b;
        b = temp;
    }
    printf("%d,%d,%d\n",c,b,a); 

}


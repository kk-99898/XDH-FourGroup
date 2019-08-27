把方法放在头文件

把方法提前编译成-o文件，然后在和main一起编译

[重要]

cc -c min.c -o min.o 编译成o文件，也就是静态库

加上-g 选项，会保留代码的文字信息，用于gbd调试使用

-o 指输出的文件参数名称，默认为min.o

gcc min.c -o min.out 这是可执行的程序；

gcc min.c -c min.o 这是将代码转换成二进制的语言

-c 只编译不链接，产生.o文件，就是obj文件，不产生执行文件

如何加入别人发来的静态库

加入别人发来的静态库，自己怎么调用：声明.h库放在头文件里

main函数中的return

gcc main.c -o main.out && ./main.out

执行完前面的才会执行后面的，怎么判断是否执行成功，echo $？如果输出值为0 ，则表明成功，才会执行下一个。0也就是return的数值

int main(int argv,char* argc[]) { int i; for(i=0;i<argv;i++){ printf("argv[%d] is %s\n",i,argc[i]); } return 0;

main函数带2个参数的原型为 int main(int, char**);惯例上把第一个参数叫argc（argument count），第二个参数叫argv（argument vector）。而argv写成指针形式或数组形式都可以：int main(int argc, char *argv[]);int main(int argc, char **argv);

但写成 char argv[] 就不对了，这个argv是char*类型而非char**类型。

重定向

./main.out >> main.txt 不覆盖 输出到文本

里

./main.out > main.txt 最新的

./main.out < input.txt 读取文本，从文本输入信息

grep

Global search Regular Expression and Print out the line

全局搜索 正则表达式

ps 用于显示当前进程 (process status) 的状态。

ps -e | grep ssh

管道可以拼接两个.out 程序

比如

./he.out | ./evy.out

注意管道和重定向的区别

**重定向**（>> 或 > 或 <） 的作用是将内容输出到文件或者将文件输入到程序

比如之前课程将数据输出到某个txt文件中，或者通过输入重定向(<)将txt文件的内容输入到程序中。

- **![https://img4.mukewang.com/5c90951a0001e0de09030202.jpg](https://img1.mukewang.com/5c90951a0001e0de05000112.jpg?ynotemdtimestamp=1565321902331)**

**管道**（|）是将程序和程序之间形成“链接”，

比如课程中的计算input.c与avg.c通过管道链接，实现统计平均数的功能，如下图:

![https://img1.mukewang.com/5c9093db00010d8f08760249.jpg](https://img2.mukewang.com/5c9093db00010d8f05000143.jpg?ynotemdtimestamp=1565321902331)

-e = -A

Display information about other users' processes, including those without controlling ter- minals.

&是一个取地址符，&a表示变量a的地址。

scanf("%d",&a); 表示从键盘接收一个整数存储到内存中&a所指的地址，也就是变量a中。

数组本身就是一种指针常量

指针常量可以做的指针变量一定可以做

所以，

用gdb查看内存

格式: x /nfu <addr>

说明 x 是 examine 的缩写

n表示要显示的内存单元的个数

f表示显示方式, 可取如下值 x 按十六进制格式显示变量。 d 按十进制格式显示变量。 u 按十进制格式显示无符号整型。 o 按八进制格式显示变量。 t 按二进制格式显示变量。 a 按十六进制格式显示变量。 i 指令地址格式 c 按字符格式显示变量。 f 按浮点数格式显示变量。

u表示一个地址单元的长度 b表示单字节， h表示双字节， w表示四字节， g表示八字节

cat: concatenate连锁 cat file1 file2>>file3把文件1和文件2的内容联合起来放到file3中

C语言之冒泡排序

\#include <stdio.h>

int main(){ int a ,b, c; scanf("%d,%d,%d",&a,&b,&c); int arr[] ={a,b,c}; for(int i = 0;i<2;++i) { for(int j= 0;j<2-i;++j) { if(arr[j]<arr[j+1]) { int temp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = temp; } } } for(int i =0;i<3;++i){ printf("%d",arr[i]); } return 0; }
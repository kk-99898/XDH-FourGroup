## 创建版本库

### 版本库（repository）：

###### 又名仓库，一个目录，目录内所有文件都可被Gitg管理，每个文件的修改/删除/Git都能跟踪，以便任何时刻都可以追踪历史，或者在将来的某个时刻可以“还原‘；

##### 版本库的创建：

1. 首先，选择一个合适的位置，创建一个空目录：

   ```
   $ mkdir learngit   创建名为learngit的子目录
   $ cd learngit      cd：进入该用户的主目录
   $ pwd              pwd：显示工作路径（Print Working Directory 的缩写）
   /home/lixuehe/learngit   结果为创建的learngit的工作路径
   ```

`pwd`命令用于显示当前目录

#### 把文件添加到版本库

需要在cd 进入这个主目录的情况下才可以将文件添加

第一步，用命令`git add`告诉Git，把文件添加到仓库：

```
$ git add readme.txt
```

执行上面的命令，没有任何显示，这就对了，Unix的哲学是“没有消息就是好消息”，说明添加成功。

第二步，用命令`git commit`告诉Git，把文件提交到仓库：

```
$ git commit -m "wrote a readme file" 
                            （-m后面输入的是本次提交的说明，可以输入任意内容，）
```



### 小结

初始化一个Git仓库，使用`git init`命令。

添加文件到Git仓库，分两步：

1. 使用命令`git add <file>`，注意，可反复多次使用，添加多个文件；

2. 使用命令`git commit -m <message>`，完成

   ------

   ##### 查看修改内容

   当`readme.txt`被修改过了，可以通过**git diff**查看修改内容；

**git log **  

​    命令显示从最近到最远的提交日志 :可以查看对文件的修改

--pretty=oneline`参数：  可以简化输出的结果



**启动时光穿梭机，准备把`readme.txt`回退到上一个版本**    git reset --hard HEAD^(用`HEAD`表示当前版本)；在重新回到刚才的状态：

只要上面的命令行窗口还没有被关掉，你就可以顺着往上找啊找啊，找到那个`append GPL`的`commit id`是`1094adb...`，于是就可以指定回到未来的某个版本：

```
$ git reset --hard 1094a
```

**git reflog**   用来记录你的每一次命令：

### 小结

- `HEAD`指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令`git reset --hard commit_id`。
- 穿梭前，用`git log`可以查看提交历史，以便确定要回退到哪个版本。
- 要重返未来，用`git reflog`查看命令历史，以便确定要回到未来的哪个版本。

### 工作区和暂存区

#### 工作区（Working Directory）

就是在电脑里能看到的目录，

#### 版本库（Repository）

工作区有一个隐藏目录`.git`，这个不算工作区，而是Git的版本库。

Git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支`master`，以及指向`master`的一个指针叫`HEAD`。

![](/home/lixuehe/下载/1.jpeg)

`git add`命令实际上就是把要提交的所有修改放到暂存区（Stage），然后，执行`git commit`就可以一次性把暂存区的所有修改提交到分支。

**Git是如何跟踪修改的:每次修改，如果不用`git add`到暂存区，那就不会加入到`commit`中。**

#### 当想要撤回进行的修改时：

##### 只是在工作区进行了修改，并未提交到暂存区

***1. git checkout -- file***可以丢弃工作区的修改：还未进行git add到暂存区

命令`git checkout -- readme.txt`意思就是，把`readme.txt`文件在工作区的修改全部撤销，这里有两种情况：

一种是`readme.txt`自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；

一种是`readme.txt`已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。

总之，就是让这个文件回到最近一次`git commit`或`git add`时的状态。

##### 在工作区进行了修改，并且提交到了暂存区时进行撤销修改：

***2.git reset***命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用`HEAD`时，表示最新的版本。

1. 用命令`git reset HEAD <file>`可以把暂存区的修改撤销掉（unstage），重新放回工作区：此时暂存区是干净的，工作区有修改：

2. ```
   使用 git checkout -- readme.txt丢弃工作区的修改
   ```

### 小结

场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令`git checkout -- file`。

场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令`git reset HEAD <file>`，就回到了场景1，第二步按场景1操作。

场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考[版本回退](https://www.liaoxuefeng.com/wiki/896043488029600/897013573512192)一节，不过前提是没有推送到远程库。

### 删除文件

- rm test.txt
- 



## Linux 下的C程序

#### 输出一个‘’hello word!‘’

- `stdio`:标准输入输出流；

- `\n`换行； 

- **步骤：**

  ​	`cd ~ /workspace/`-->`cd lens1 `-->`touch a.c`-->`vi a.c`进行编写如下代码：

  1. 导入stdio (标准输入输出流)；

  2. 编写main方法进行打印；

  3. 代码：

     ```
     #include <stdi0.h>
     int  main(){
         printf("hello word!"\n);
         return 0;
     }
     ```

  4. 使用`wq`进行保存退出，进行输出：

  5. 输入：`cc.a.c ，`输入`ls`查看，默认输出了一个a.out 文件；

  6. `ls -l`查看文件权限;  r-read 可读；w-write 可写 ；x 可执行；

  7. 执行a.out 文件：`./a.out`输出：”hello word“  （`./`：当前目录下）

## 多文件操作--在vim中同时编辑多个文件

- `%d`：表示把数据按十进制整型输出；

- `:set nu`:打开行号；

- **在vim 中同时创建多个源文件,步骤如下：**

  1. 在workspace下创建一个新的文件夹 `mkdir lens2`；

  2. 首先编写一个hello.c文件： hello.c

     ```
     vi.hello.c进入编辑模式：
     
     #include <stdio.h>
     int max(int a,int b){
     
         if(a>b){
             return a;
         }else{
             return b;
         }
     }
     int main(){
     
         int a=22;
         int b=33;
         int maxNum=max(a,b);
         printf("max=%d",maxNum);
         return 0;
     }
     wq保存后，可查看结果` gcc hello.c--ls-->./a.out-->max=33
     ```

  3. 再次进入`vi.hello.c` 命令模式下输入：`：sp max.c`创建一个名为max.c的文件；

  4. 使用`Ctrl W+上下箭头`可切换文件位置，选在在哪里编辑；

  5. 查看max()所占行数，8行，可将鼠标放在int max()位置处，按`8dd`可实现将max()函数进行剪切，然后使用`Ctrl W+上箭头`切换到max.c文件编辑位置，按`p`进行粘贴;

  6. `wqa`进行保存所有并退出；

  7. `gcc max.c hello.c -o main.out`

  8. 此时可查看`ls`

     ```
     lixuehe@lixuehe-ThinkPad-T420:~/workspace/lens2$ ls
     a.out  hello.c  main.out  max.c
     lixuehe@lixuehe-ThinkPad-T420:~/workspace/lens2$ ./main.out
     max=33lixuehe@lixuehe-ThinkPad-T420:~/workspace/lens2$ ``
     ```

     一样可以得到结果；**此时的max()函数在max.c文件中；**

  9. 需要在hello.c中进行声明max()函数：

     `#include "max.c"`(include <系统中存在的库>；include "当前目录下寻找对应的")

     即可使用./a.out得到最终的输出结果；

## 多文件操作--头文件与函数定义分离

- `gcc -c max.c `  可以生成一个名为`max.o` 的文件；`gcc -c max.c -o m1.o`并给他命名为m1.o; 

- `max.o`为可读可写不可执行；文件进行了编译，编译器对源代码进行了编译，编译成了计算级可识别的二进制；

- **步骤：**

  1. `cp max.c min.c` 拷贝max.c 文件，名为min.c；
     2. `gcc -c min.c -o min.o`    进行编译；
        3. 修改代码内容，为输出最小数；
           4. 将**min.o** 与**max.o** 编写成头文件:
        4. `vi max.h`  --`int max(int a,int b);`
        5. `vi min.h` --`int min(int a,int b);`
           5. 在hello.c 中引入：
        6. #include "max.h"
        7. #include "min.h"
  2. `gcc  max.o min.o hello.c` -->`./a.out `  进行编译得到结果；

  

## Linux C语言--makeFile 的编写

- 当有多个.o文件时，进行编译，需要gcc多个.o，很麻烦，为了更方便的编译，使用make指令;

- **make** 工具，可以将大型的开发项目，分成若干个模块，更加清晰、快捷的整理、编译源文件；

- **makeFile的编写步骤：**

  1. 首先将所有的`.o`文件进行删除  :`rm *.o`; 

  2. 查看是否有make ：`make -v`;若没有，则进行下载`sudo apt  install make`;

  3. `vi makefile` 创建并开始便捷makefile文件；

  4. 添加注释：`＃this is make file;`  # 后内容被忽略；

  5. ```
     #this is make file
     hello.out:max.o min.o hello.c
             gcc max.o min.o hello.c -o hello.out
     max.o:max.c
             gcc -c max.c
     min.0:min.c
             gcc -c min.c
     ```

     - `-o hello.out`:是将自动生成的　.out 文件进行命名；
     - 解读这段代码：我们需要最终生成一个`hello.out`文件，需要依赖于`max.o min.o hello.c`，而其中只有`hello.c`文件是存在的，所以又需要将另两个没有的`.o`文件进行编译生成；

  6. `ｗｑ`　保存退出，输入`make`进行生成makefile 文件，使用ls查看,结果如下，

     `hello.out  hello.c  makefile  max.c  max.h  max.o  min.c  min.h  min.o`

  7. `./hello.out`查看结果，也可得到最小值和最大值：

  8. 当我们只改动`gcc max.o min.o hello.c -o hello.out`这一行代码时,再次`make`则发现，程序只执行了`gcc max.o min.o hello.c -o hello.out`,也就是说:

     **已经编译过的文件，如果没有修改，则不会重复编译，节省了时间；**

     

## main 函数

### --return  0 的作用

- 当同时执行两部操作时，通过＆＆连接，只有第一条指令成功执行（返回值为***0***），才会执行下一条执行；

- 通过`echo $?`查看执行命令是否成功：如果返回值是0，就是执行成功；如果是返回值是0以外的值，就是失败。

- **验证步骤：**

  1. 新建一个文件lens3 :`mkdir lens3`;

  2. 在lens3下创建一个文件”main.out“:`vi main.c`;

  3. ```
     #include <stdio.h>
     int main(int argv,char* argc[])
     {
         printf("hello word\n");
         return 0;
     }
     ```

  4. 直接执行两部操作，通过**&&**链接：`gcc main.c -o main.out && ./main.out`
     得到结果：”hello word“；

  5. 查看是否执行成功：`echo $?`　输出为０，代表执行成功；

  6. 将”main.c“中的返回值进行修改：return 101;

  7. 重新编译：`gcc main.c -o main2.out && ./main2.out`-->得到结果还是”hello word“;`echo $?`查看执行结果，为101,指令没有执行成功；

  8. 再执行`./main2.out && ls`-->得到结果还是”hello word“，没有执行ls ；

  9. **所以，如果要用”＆＆“则需要前一个指令成功时必须返回０**；

### main 函数的参数（重点）



**argc、argv的具体含义** 

> main( int argc, char* argv[] ) 中 
> 第一个参数，int型的argc，为整型，用来统计程序运行时发送给main函数的命令行参数的个数，在VS中默认值为1。 
> 第二个参数，char*型的argv[]，为字符串数组，用来存放指向的字符串参数的指针数组，每一个元素指向一个参数。各成员含义如下： 
> argv[0]指向程序运行的全路径名 
> argv[1]指向在DOS命令行中执行程序名后的第一个字符串 
> argv[2]指向执行程序名后的第二个字符串 
> argv[3]指向执行程序名后的第三个字符串 
> argv[argc]为NULL ./m3.out

## Linux C语言--标准输入流、输出流及错误流

### --输入流、输出流、错误流基本介绍

- `stdin `     输入流：默认根据键盘输入；

- `stdout `   输出流：默认根据显示器输出；

- `stderr`    错误流

- 举例验证：

  ```
  #include <stdio.h>
  int main(){
     //printf("please input the value a :\n ")
      fprintf(stdout,"please input the value a :\n ");
      int a;
      fscanf(stdin,"%d",&a);
      if(a<0){
          fprintf(stderr,"the value must>0");
          return 1;
      }
      return 0;
  }
  ｗｑ-->gcc cio.c-->./a.out-->
  ```

- 执行结果：
  kk@kk:~/workspace/lens4$ ./a.out
  **please input the value a :**
  ***3***
  kk@kk:~/workspace/lens4$ ./a.out
  **please input the value a :**

  ***-1***
  **the value must>0**kk@kk:~/workspace/lens4$ vi cio.c
  kk@kk:~/workspace/lens4$ 

### --输入流、输出流、错误流的重定向

- "1>>"输出流重定向，在原来的基础上追加新得内容；其中１可以不加
- ”>“输出流重定向，覆盖原来的内容，只增加本次添加的新内容；
- "２>>"错误流重定向，错误内容；
- ”<“输入流重定向；

## 管道

- ls   查看当前目录；

- ls/  查看根目录；

- ls /etc/ 查看etc目录下的内容；

- ls/etc/ | grep ab 查看etc 下所有包含ab 的文件；

- ps -e 当前运行的进程；

- ps -e|grep ssh 当期进程有无包含ssh 的进程，如果有证明已经启动ssh ；

  #### ”|“即为管道:通过管道，我们可以将etc中的内容变为输出流，通过管道，作为输入流传递给grep;自动实现输入输出；

> SSH 为 [Secure Shell](https://baike.baidu.com/item/Secure Shell) 的缩写，由 IETF 的网络小组（Network Working Group）所制定；SSH 为建立在应用层基础上的安全协议。SSH 是目前较可靠，专为[远程登录](https://baike.baidu.com/item/远程登录/1071998)会话和其他网络服务提供安全性的协议。利用 SSH 协议可以有效防止远程管理过程中的信息泄露问

------

## Linux C语言-通过管道打造实用小程序

#### 实现输入n个数据得到数据的平均值；

1. 编写一个计算平均值的小程序；

   1. `mkdir lens6-->vi avg.c`

   2. ```
      #include <stdio.h>
      int main(){
          //求平均值;
          int s,n;
          scanf("%d,%d",&s,&n);
          float v=s/n;
          printf("v=%f\n",v);
          return 0;
      }
      wq-->gcc avg.c -o avg.out-->./avg.out(测试可用)
      ```

2. 编写一个计算用户输入数据的个数与和的小程序；

   1. ```
      #include <stdio.h>
      int main(){
          int flag=1;
          int i;
          //计算用户输入的数据个数；
          int count=0;
          //计算所有数据的和；
          int s=0;
          while(flag){
             scanf("%d",&i);
             if(0==i) break;
             count++;
             s+=i;
          }
          printf("%d,%d\n",s,count);
          return 0;
      }
      wq-->cc input.c -o input.out-->./input.out(测试可用)
      
      ```

3. 结合以上两个小程序，实现，输入n 个数据，直接计算n 个数据的平均值；

   - `./input.out | ./avg.out`
   - 输入测试数据 ：`100 ,100,100,100,100`
   - 得到结果：`v=100.000000`
## linux常用命令大全

- **date** ：显示系统日期 （date +%Y/%m/%d : 显示效果如2018/01/01）
- **date 070314592018.00** ：设置时间（格式为月日时分年.秒 ）
- **clock -w** ：将时间修改保存到 BIOS
- **cal 2018** ：显示2018年的日历表
- **clear** ：清空命令行
- **ifconfig** ：显示或设置网卡（查ip等）（类似windows中ipconfig）
- **ping -c 3 www.baidu.com** ：测试百度与本机的连接情况（ -c 3表示测试3次）
- **cat /proc/cpuinfo** ：显示CPU的信息
- **cat /proc/cpuinfo| grep "physical id"| sort| uniq| wc -l** ：查看物理CPU个数
- **cat /proc/cpuinfo| grep "cpu cores"| uniq** ：查看每个物理CPU的核数
- **cat /proc/cpuinfo| grep "processor"| wc -l** ：查看逻辑CPU个数即线程数

- **top** ：动态实时显示cpu、内存、进程等使用情况（类似windows下的任务管理器）
- **top -d 2 -p 7427** ：-d为画面更新的秒数，默认5秒，-p为指定进程pid的信息
- **vmstat 2 10** ：每隔2秒采集一次服务器状态，采集10次（查看内存、io读写状态、cpu）
- **free -h** :查看系统内存及虚拟内存使用情况
- **df -h** :显示磁盘的空间使用情况
- **iostat** ：可查io读写、cpu使用情况
- **sar -u 3 5** :查看cpu使用情况（3秒一次，共5次）
- **sar -d 2 3** ：评估磁盘性能
- **ps aux|grep firefox** ：获取火狐的进程号（PID）（可查看进程占用cpu、内存百分比及进程触发指令的路径）
- **kill -9 进程号** ：强制杀死进程
- **systemctl** ：查看正在运行的服务

## 文件和目录

- **cd** ：进入该用户的主目录 ~（root用户为/root,其他用户为/home/用户名）

- **cd ..** ：返回上一级目录（注意要空格）

- **cd -** ：返回上次所在目录

- **cd /** ：返回根目录 （绝对路径）

- **cd ./目录1/目录2** ：进入当前目录下的子目录（相对路径）

- **pwd** ：显示工作路径（Print Working Directory 的缩写）

- **ls -a** :列出文件下所有的文件，包括以“.“开头的隐藏文件

- **ls -lh *.log** :列出文件的详细信息（.log结尾，*为通配符代表任意多个字符）

- **file 文件或目录** ：显示文件的类型（目录、text、zip、shell脚本等）

- **mkdir dir1** :创建目录(dir1)（mkdir为make directory的缩写）

- **mkdir -p ./dir1/dir2** :递归创建目录（-p：父目录不存在时，同时建立）

- **touch a.txt** :创建文件a.txt

- **rm 文件** ：删除文件

- **rm -r 目录或文件** ：删除目录（及目录下所有文件）（非空也可以）

- **rm -rf 目录或文件** ：强制删除，如：rm -rf * 为删除当前目录下所有文件

- **find -inum 1842601 -exec rm -rf {} ;** ：删除乱码文件或目录(会提示找不到此文件或文件夹但其实已经删除了)（上传中文文件会乱码，rm命令删除不了）（先使用ls -i命令找到inode，即文件或目录前面的数字字符串,如1842601;）

- **mv a b** :移动或者重命名一个文件或者目录（存在即移动目录或覆盖文件，不存在即改名）

- **mv /opt/git/g /opt/a** ：移动g到opt目录下并改名为a（a目录不存在，若存在则为移动g到a目录下）

- **mv -t ./test a.txt b.txt** ：移动多个文件到某目录下

- **cp -ai /opt/abc /opt/git/** ：复制abc目录（或文件）到git目录下（选项a表示文件的属性也复制、目录下所有文件都复制；i表示覆盖前询问）

- **ln -s /opt/a.txt /opt/git/** :对文件创建软链接（快捷方式不改名还是a.txt）
  
- **ln -s /opt/a.txt /opt/git/b** :（快捷方式改名为b）（下面的一样可以改名）

- **ln -s /opt/mulu /opt/git/** :对目录创建软链接

- **ln /opt/a.txt /opt/git/** :对文件创建硬链接H

## 文件权限

- **chmod [-R] 777文件或目录** ：设置权限（chmod a+rwx a=chmod ugo +rwx a=chmod 777 a）

- **chmod [{ugoa}{+-=}{rwx}][文件或目录]** ：如chmod u-w,g+x,o=r test.txt为user（拥有者）去掉写权限，group(所属组)加上执行权限，other(其他人)权限等于只读；

- **chown [-R] admin:root /opt/** ：变更文件及目录的拥有者和所属组（-R递归处理所有文件和文件夹，admin为拥有者，root为所属者）

## 文件查找

- **locate a.txt** ：在系统全局范围内查找文件名包含a.txt字样的文件（比find快）;

> locate:原理是updatedb会把文件系统中的信息存放到数据库databases中（但一般一天才执行一次，所以locate找不到新创建的文件，需要先手动执行updatedb，再执行locate）,locate从数据库中读数据;

>  find：在目录结构中搜索文件，并执行指定的操作
>  语法：find pathname -options [-print -exec ...]
>  pathname ：为 find命令所查找的目录路径。例如用.来表示当前目录，用/来表示系统根目录（find查找范围为目标目录及其子目录所有文件及目录）；
>  -exec： find命令对匹配的文件执行该参数所给出的shell命令。相应命令的形式为'command' { } ;，注意{ }和；之间的空格；
>  -print： find命令将匹配的文件输出到标准输出；

- **find /home -mtime -2** ：在/home下查最近2*24小时内改动过的文件
- **find . -size +100M** ：在当前目录及子目录下查找大于100M的文件
- **find . -type f** ：f表示文件类型为普通文件（b/d/c/p/l/f 分别为块设备、目录、字符设备、管道、符号链接、普通文件）
- **find . -mtime +2 -exec rm {} ;** :查出更改时间在2*24小时以前的文件并删除它**
- **find . -name '\*.log' -exec grep -i hello {} \; -print** :在当前目录及子目录下查出文件名后缀为.log的文件并且该文件内容包含了hello字样并打印，-exec 命令 {} \表示对查出文件操作，-i表示不区分大小写；
- **find . -name '\*.log'|grep hello** :在当前目录及子目录下查出文件名后缀为.log的文件并且文件名包含了hello字样（grep用来处理字符串）；
- **grep -i 'HELLO' . -r -n** ：在当前目录及子目录下查找文件内容中包含hello的文件并显示文件路径（-i表示忽略大小写）
- **which java** ：在环境变量$PATH设置的目录里查找符合条件的文件，并显示路径（查询运行文件所在路径）
- **whereis java** :查看安装的软件的所有的文件路径（whereis 只能用于查找二进制文件、源代码文件和man手册页，一般文件的定位需使用locate命令）

## 查看文件的内容

- **cat [-n] 文件名** :显示文件内容，连行号一起显示
- **less 文件名** ：一页一页的显示文件内容（搜索翻页同man命令）
- **head [-n] 文件名** ：显示文件头n行内容，n指定显示多少行
- **tail [-nf] 文件名**:显示文件尾几行内容,n指定显示多少行,f用于实时追踪文件的所有更新，常用于查阅正在改变的日志文件（如tail -f -n 3 a.log 表示开始显示最后3行，并在文件更新时实时追加显示，没有-n默认10行）
- **sed -n '2,$p' ab** ：显示第二行到最后一行；
- **sed -n '/搜索的关键词/p' a.txt** ：显示包括关键词所在行
- **cat filename |grep abc -A10** ：查看filename中含有abc所在行后10行（A10）、前10行（B10）内容
- **less a.txt|grep git** ：显示关键词所在行，管道符”|”它只能处理由前面一个指令传出的正确输出信息，对错误信息信息没有直接处理能力。然后传递给下一个命令，作为标准的输入；
- **cat /etc/passwd |awk -F ':' '{print $1}'** ：显示第一列

## 文本处理

- **ls -l>file** ：输出重定向>（改变原来系统命令的默认执行方式）：ls -l命令结果输出到file文件中，若存在，则覆盖
- **cat file1 >>file** ：输出重定向之cat命令结果输出追加到file文件(>表示覆盖原文件内容，>>表示追加内容)
- **ls fileno 2>file** ： 2>表示重定向标准错误输出（文件不存在，报错信息保存至file文件）；
- **cowsay <a.txt** :重定向标准输入’命令<文件’表示将文件做为命令的输入（为从文件读数据作为输入）
- **sed -i '4,$d' a.txt** ：删除第四行到最后一行（$表示最后一行）（sed可以增删改查文件内容）
- **sed -i '$a 增加的字符串' a.txt** ：在最后一行的下一行增加字符串
- **sed -i 's/old/new/g' a.txt** :替换字符串；格式为sed 's/要替换的字符串/新的字符串/g' 修改的文件
- **vim 文件**：编辑查看文件（同vi）

## 用户与权限

- **useradd 用户名** ：创建用户
- **userdel -r 用户名** :删除用户：（-r表示把用户的主目录一起删除）
- **usermod -g 组名 用户名** ：修改用户的组
- **usermod -aG 组名 用户名** ：将用户添加到组
- **groups test** ：查看test用户所在的组
- **cat /etc/group |grep test** ：查看test用户详情：用户名:口令:用户标识号:组标识号:注释性描述:主目录:登录Shell
- **passwd [ludf] 用户名** ：用户改自己密码，不需要输入用户名，选项-d:指定空口令,-l:禁用某用户，-u解禁某用户，-f：强迫用户下次登录时修改口令
- **groupadd 组名** ：创建用户组
- **groupdel 用户组** ：删除组
- **groupmod -n 新组名 旧组名** ：修改用户组名字
- **su - 用户名**：完整的切换到一个用户环境（相当于登录）（建议用这个）（退出用户：exit）
- **su 用户名** :切换到用户的身份（环境变量等没变，导致很多命令要加上绝对路径才能执行）
- **sudo 命令** ：以root的身份执行命令（输入用户自己的密码，而su为输入要切换用户的密码，普通用户需设置/etc/sudoers才可用sudo）

## 磁盘管理

- **df -h** :显示磁盘的空间使用情况 及挂载点
- **df -h /var/log** :（显示log所在分区（挂载点）、目录所在磁盘及可用的磁盘容量）
- **du -sm /var/log/\* | sort -rn** : 根据占用磁盘空间大小排序（MB）某目录下文件和目录大小
- **fdisk -l** :查所有分区及总容量，加/dev/sda为查硬盘a的分区）
- **fdisk /dev/sdb** :对硬盘sdb进行分区
- **mount /dev/sda1 /mnt** ：硬盘sda1挂载到/mnt目录（mount 装置文件名 挂载点）
- **mount -t cifs -o username=luolanguo,password=win用户账号密码,vers=3.0 //10.2.1.178/G /mnt/usb** :远程linux 共享挂载windows的U盘,G为U盘共享名，需设置U盘共享
- **mount -o loop /opt/soft/CentOS-7-x86_64-DVD-1708.iso /media/CentOS** ：挂载iso文件
- **umount /dev/sda1** ：取消挂载（umount 装置文件名或挂载点）

## 压缩、解压和打包备份

>   单纯tar仅为打包（多个文件包成一个大文件），加上参数-j(bzip2格式.bz2)、-z（gzip格式.gz）可以备份、压缩(-c)、解压（-x），备份一般比压缩多加参数-p（保留原本文件的权限与属性），-C可以指定解压到特定目录；bzip2、gzip只能对单一文件压缩；

- **file 文件名** ：查文件类型（可看是用哪一种方式压缩的）
- **tar -zxvf a.tar.gz -C ./test** ：解压tar.gz到当前目录下的test目录
- **tar -zcvf /opt/c.tar.gz ./a/** ：压缩tar.gz（把当前目录下的a目录及目录下所有文件压缩为 /opt/目录下的c.tar.gz，这样tar -zxvf c.tar.gz解压出来带有目录a）
- **tar -jxvf a.tar.bz2** ：解压tar.bz2（到当前目录）
- **tar -jcvf c.tar.bz2 ./a/** ：压缩tar.bz2（把当前目录下的a目录及目录下所有文件压缩到当前目录下为c.tar.gz2）
- **unzip a.zip** ：解压zip（到当前目录）
- **unzip -o mdmtest.war -d /opt/mdm** ：推荐使用unzip解压war包（-o覆盖原有文件，-d指定文件解压后存储的目录）
- **zip -r c.zip ./a/** :压缩zip(把当前目录下的a目录及目录下所有文件压缩到当前目录下为c.zip
- **bzip2 -k file1** ： 压缩一个 'file1' 的文件（-k表示保留源文件）（bzip2格式，比gzip好）
- **bzip2 -d -k file1.bz2** ： 解压一个叫做 'file1.bz2'的文件
- **gzip file1** ： 压缩一个叫做 'file1'的文件（gzip格式）（不能保留源文件）
- **gzip -9 file1** ： 最大程度压缩
- **gzip -d file1.gz** ： 解压缩一个叫做 'file1'的文件

## 软件安装

#### rpm包手动下载安装

- **wget -P /opt https://网址** ：下载到/opt目录
- **rpm -ivh wps-office-版本.x86_64.rpm** :安装rpm包（包要先下载）（要先装依赖包）
- **rpm -e wps-office** ：卸载软件（注意不要软件名不要版本号）
- **rpm -qa |grep wps** ：查看安装的rpm包
- **rpm -ql 软件名称** ：查看rpm包安装路径（软件名称可通过rpm -qa|grep java）

#### apt方式安装

- **apt-get install aptitude** ：安装aptitude工具,实现依赖自动安装，依赖版本自动降级或升级
- **aptitude install 软件** ：安装软件（推荐这种方式安装）
- **apt-cache search 软件** ：搜索软件
- **apt-get install 软件** ：安装软件
- **apt-get purge 软件** ：卸载软件（包括配置文件，只删除软件purge换成remove）
- **apt-get upgrade** ：更新所有已安装的软件包
- **apt-get update** ：升级列表中的软件包
- **apt-get clean** ：从下载的软件包中清理缓存

#### deb包安装

- **dpkg -i package.deb** ：安装一个 deb 包
- **dpkg -r package_name** ：从系统删除一个 deb 包
- **dpkg -l |grep chrome** ：查询系统中所有已经安装的 deb 包
- **dpkg -L 软件名称** ：查软件安装的文件

#### 软件自己的模块/包管理器

>  如python：系统的源中不可能包含该软件的所有模块； 系统的源中该软件的模块的更新要远远滞后于最新版本；手动安装python，并用Python 自带的 pip 安装模块（类似yum）；

- **pip install redis**  ：安装python软件包[redis](http://www.ttlsa.com/redis/)
- **pip unstall redis**  :卸载
- **pip show --files redis**  :pip查看已安装的包
- **pip list --outdated** :检查更新

### 源代码(Source)包

#### 编译安装

>  源代码包（一般有install文件）如[hello-2.2.tar.bz2](http://ftp.gnu.org/gnu/hello/hello-2.2.tar.bz2)，下载复制到/opt;

- **tar -jxvf hello-2.2.tar.bz2** :解压
- **./configure --prefix=/opt/软件目录名称** :为编译做好准备，加上 prefix 手动指定安装路径
- **make** ：编译
- **make install** ：安装
- **make clean** ：删除安装时产生临时文件
- **vim /etc/profile export PATH=$PATH:/opt/目录/bin** ：手动指定安装路径需要加path
- **hello** ：执行软件：看INSTALL和README文件（是否源码包、如何安装、执行都看这两个）
- **rm -rf 软件目录名称** :卸载软件


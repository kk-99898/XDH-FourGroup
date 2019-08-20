最近任务

## 远程协作的流程

1. 自己本地建立两个分支,一个开发Dev分支,一个master分支;                               //git checkout name   //git branch name
2. 查看当前分支git status或branch,在分支上提交版本库                                                                 //origin 指的就是远程仓库
3. 远程关联仓库:git remote add origin githubgit@github.com:kk-99898/hero.git
4. 推送本地master分支到远程仓库lpd分支 : git push origin master:lpd

组长合代码

1. git fetch



1.把git文档前三章看完

2.廖雪峰git课程看到使用git那一节

分布式版本控制系统（Distributed Version Control System，简称 DVCS）

1.sudo apt-get install git就可以直接完成Git的安装

sudo是linux系统管理指令

apt-cache和apt-get是apt包的管理工具*

2.创建一个版本库非常简单，首先，选择一个合适的地方，创建一个空目录：

```
$ mkdir learngit
$ cd learngit
$ pwd    
/Users/michael/learngit
```

`pwd`命令用于显示当前目录

3.通过`git init`命令把这个目录变成Git可以管理的仓库

4.用命令`git add`告诉Git，把文件添加到仓库：提交到暂存区stage里

## git add -A           

提交当前工作区所有的文件到暂存区

```
$ git add readme.txt
```

5.命令`git commit`告诉Git，把文件提交到仓库，commit英文意思是遵从安排

```
$ git commit -m "wrote a readme file"
```

`-m`后面输入的是本次提交的说明

`git commit` 加上 `-a` 选项，Git 就会自动把所有已经跟踪过的文件暂存起来一并提交，从而跳过 `git add` 步骤

git commit -a -m"备注信息"

用`HEAD`表示当前版本，也就是最新的提交

退回上一个版本 git reset --hard HEAD^ 或者HEAD^5 HEAD~100 注意空格

后悔撤销 git reset --hard commit前5个编号

查找commit编号 git reflog

git reflog 可以查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）

#### 工作区（Working Directory）

git status 查看当前工作区域未被提交的文件或者暂存区未被提交的文件

`git checkout -- readme.txt 是把`readme.txt文件在工作区的修改全部撤销

git reset HEAD readme.txt可以把暂存区的修改撤销掉（unstage），重新放回工作区

提交本地的版本库到github

```
git push origin master
```

### 删除远程分支

```
git push origin --delete serverfix
```

克隆git git clone

查看分支：`git branch`

创建分支：`git branch <name>`

切换分支：`git checkout <name>`

创建+切换分支：`git checkout -b <name>`

合并某分支到当前分支：`git merge <name>` 英文合并的意思

合并分支时，加上`--no-ff`参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而`fast forward`合并就看不出来曾经做过合并。

只不过提交历史不同罢了。 变基是将一系列提交按照原有次序依次应用到另一分支上，而合并是把最终结果合在一起。

```
git merge --no-ff -m "merge with no-ff" dev
```

删除分支：`git branch -d <name>`

如果想要检查你的配置，可以使用 `git config --list` 命令来列出所有 Git 当时能找到的配置。

| origin | 英[ˈɒrɪdʒɪn]                  |
| ------ | ----------------------------- |
| n.     | 起源; 源头; 起因; 身世; 出身; |

```
git stash      可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作：
```

刚才的工作现场存到哪去了？用`git stash list`命令看看

恢复一下，有两个办法：

一是用`git stash apply`恢复，但是恢复后，stash内容并不删除，你需要用`git stash drop`来删除；

另一种方式是用`git stash pop`，恢复的同时把stash内容也删了

`git log --graph`命令可以看到分支合并图

`git stash list`查看，就看不到任何stash内容

分支还没有被合并，如果删除，将丢失掉修改，如果要强行删除，需要使用大写的`-D`参数。。

现在我们强行删除：

```
$ git branch -D feature-vulcan
```

6.显示从最近到最远的提交日志

git log --pretty=oneline

```
git log --graph --pretty=oneline --abbrev-commit
```

`--pretty`。 这个选项可以指定使用不同于默认格式的方式展示提交历史。 这个选项有一些内建的子选项供你使用。 比如用 `oneline` 将每个提交放在一行显示，查看的提交数很大时非常有用。

### 忽略文件

一般我们总会有些文件无需纳入 Git 的管理，也不希望它们总出现在未跟踪文件列表。 通常都是些自动生成的文件，比如日志文件，或者编译过程中创建的临时文件等。 在这种情况下，我们可以创建一个名为 `.gitignore` 的文件，列出要忽略的文件模式。 来看一个实际的例子：

```
$ cat .gitignore
*.[oa]
*~
```

第一行告诉 Git 忽略所有以 `.o` 或 `.a` 结尾的文件。一般这类对象文件和存档文件都是编译过程中出现的。 第二行告诉 Git 忽略所有以波浪符（~）结尾的文件，许多文本编辑软件（比如 Emacs）都用这样的文件名保存副本。 此外，你可能还需要忽略 log，tmp 或者 pid 目录，以及自动生成的文档等等。 要养成一开始就设置好 .gitignore 文件的习惯，以免将来误提交这类无用的文件。

```
 git tag v0.9 f52c633
git tag -a v1.4 -m 'my version 1.4'
git tag -a v1.2 9fceb02
删除标签
git tag -d v1.4-lw
```

`--merged` 与 `--no-merged` 这两个有用的选项可以过滤这个列表中已经合并或尚未合并到当前分支的分支。 如果要查看哪些分支已经合并到当前分支，可以运行 `git branch --merged`：

变基和合并的区别

变基1，在主分支上变基其他分支

git rabase master server

变基2，在分支上变基

git rabase master

```
git rebase --onto master server client
```

 git rebase master server

然后再

合并merge是在主分支上把其他分支上的修改合并到本分支上



## Git基本常用命令如下：

　　mkdir：         XX (创建一个空目录 XX指目录名)

　　pwd：          显示当前目录的路径。

　　git init          把当前的目录变成可以管理的git仓库，生成隐藏.git文件。

　　git add XX       把xx文件添加到暂存区去。

　　git commit –m “XX”  提交文件 –m 后面的是注释。

　　git status        查看仓库状态

　　git diff  XX      查看XX文件修改了那些内容

　　git log          查看历史记录

　　git reset  --hard HEAD^ 或者 git reset  --hard HEAD~ 回退到上一个版本

　　(如果想回退到100个版本，使用git reset –hard HEAD~100 )

　　cat XX         查看XX文件内容

　　git reflog       查看历史记录的版本号id

　　git checkout -- XX  把XX文件在工作区的修改全部撤销。

　　git rm XX          删除XX文件

　　git remote add origin https://github.com/tugenhua0707/testgit 关联一个远程库

　　git push –u(第一次要用-u 以后不需要) origin master 把当前master分支推送到远程库

　　git clone https://github.com/tugenhua0707/testgit  从远程库中克隆

　　git checkout –b dev  创建dev分支 并切换到dev分支上

　　git branch  查看当前所有的分支

　　git checkout master 切换回master分支

　　git merge dev    在当前的分支上合并dev分支

　　git branch –d dev 删除dev分支

　　git branch name  创建分支

　　git stash 把当前的工作隐藏起来 等以后恢复现场后继续工作

　　git stash list 查看所有被隐藏的文件列表

　　git stash apply 恢复被隐藏的文件，但是内容不删除

　　git stash drop 删除文件

　　git stash pop 恢复文件的同时 也删除文件

　　git remote 查看远程库的信息

　　git remote –v 查看远程库的详细信息

　　git push origin master  Git会把master分支推送到远程库对应的远程分支上
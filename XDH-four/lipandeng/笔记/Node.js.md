## Node

安装 node -v

## npm

安装 npm -v

npm其实是Node.js的包管理工具（package manager)

终端输入node 进入Node交互环境      .exit退出环境

## 模块

每个.js文件都是一个模块,格式开头:"use strict";  结尾:module.exports = function name;

引用格式:var 变量名 = require ("相对路径 的模块名");例如:var greet = require('./hello');

## 必须使用异步代码

读取文件  fs.readFile()  同步读取文件 fs. readFileSync()

写入文件 fs.writeFile("文件名",数据,回调 函数)  同步写入文件 fs.writeFileSync()

## 获取文件信息 fs.stat()

stat.isFile()是否为文件 stat.isDirectory()是否为文件夹   stat.size  大小 sata.birthtime  stat.mtime  创建和修改时间

## streem

fs.createReadStream("a.txt","utf-8")  打开一个读取流       createWriteStreem

## pipe复制文件的程序

"use strict";

var fs = require("fs");

var rs = fs.creatReadStream("a.txt");

var ws = fs.creatWriteStream("b.txt");

rs.pipe(ws);

## http

当终端使用 Node xxx.js  运行后退出环境用Ctrl+c  ;

当终端使用Node    运行后退出环境用.exit

URL以  **字符串**  的抽象形式来描述一个资源在[万维网](https://baike.baidu.com/item/万维网/215515)上的地址

url(Uniform Resource Locator)  是统一[资源](https://baike.baidu.com/item/资源/9089683)定位符

## 流程

终端先开启Node server.js  然后客户端响应对应的链接(必须是都在)

`path.resolve()` 方法将路径或路径片段的序列解析为绝对路径

`process.argv` 属性返回一个数组     **process.argv[2]**  第二个元素将是正在执行的 JavaScript 文件的路径

获取当前目录的代码

```
var root = path.resolve(process.argv[2] || '.');
```



## crypto 加密和哈希算法

degist摘要   degist("dex")    十六进制摘要的形式

encrypt   ɪnˈkrɪpt  加密  decrypt   解密

cipher  ˈsaɪfə(r)  密码  decipher 破译

aes   Advanced Encryption Standard   高级加密标准   需要自己封装函数

Diffie-Hellman   迪非 - 赫尔曼  DH加密算法

hmac    hash-based message authentication code    

## 传输控制协议（TCP，Transmission Control Protocol）是一种面向连接的、可靠的、基于字节流的传输层通信协议，由IETF的RFC 793 [1]  定义。

HTTP协议（HyperText Transfer Protocol，超文本传输协议）

var str = "asdf";

这个是js中的方法

for (var i in str){

​    i=>0,1,2,3

​    str[i]=>a,s,d,f

} 

这个是Java中的

int arr

for (var i : arr)
http协议 :  弱交互 , 不是实时的 ,http服务器,Node.js ,聊天强交互,混合协议  

post: 在地址栏url中不可见,比get要安全一点

http是明文传输,只要在网络节点上捉包,就能完整的获取数据内容,加密用https

qs.parse(url.parse(req.url).query)

qs.parse()      解析成对象的形式

url.parse()可以将一个完整的URL地址，分为很多部分，常用的有：host、port、pathname、path、query

## process.agrv

process.agrv[0]----返回可执行文件的绝对路径

process.agrv[1]----返回js文件路径

process.agrv[2]----返回其他剩余的参数

## net和http区别

`net`模块一般是和socket相关的api               `http`是http相关的api    实时连接

net是用于创建TCP服务器与客户端               http是用于实现HTTP服务器端及客户端
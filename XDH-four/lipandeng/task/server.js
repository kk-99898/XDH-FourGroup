'use strict';

//导入所需要的模块
var fs = require('fs');
var url = require('url');
var path = require('path');
var http = require('http');

// 解析server.js在服务器中的文件夹当前位置
var root = path.resolve('.');
                                            
// 创建服务器,传入回调函数
var server = http.createServer(function (request, response) {

    // 获得浏览器请求文件的path路径
    var pathname = url.parse(request.url).pathname;

    //如果浏览器传回的是路径是/,也就是首页,自动跳转到首页对应的文件路径
    if (pathname == "/") {
        pathname = "index.html";
    }

    //如果不是/, 则跳转客户端请求的对应的文件路径，
    var filepath = path.join(root, pathname);

    // 获取文件状态,进行判断请求的文件是否存在
    fs.stat(filepath, function (err, stat) {

        //如果存在,服务器发出200提示, 把相应的文件通过流返回给客户端
        if (!err && stat.isFile()) {
            console.log("200" + request.url);

            response.writeHead(200,{"Content-Type": "text/html;"+"charset=utf-8"});
            fs.createReadStream(filepath).pipe(response);
        } else {

            // 若出错了或者文件不存在,服务器发出404提示,,并返回提示给客户端
            console.log("404 " + request.url)

            response.writeHead(404);
        
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);

console.log('Server is running ');
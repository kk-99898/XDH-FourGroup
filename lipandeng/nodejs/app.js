var http = require("http");
var url = require("url");
var qs = require("querystring");
var post = require("./httpPost");
var get = require("./httpGet");

http.createServer(function (req,res) {
    //当客户端第一次请求主机数据,默认是get方式,所以进入doGet方法
    //当客户端第二次提交时,根据第一次发送的内容判断是哪种模式,默认get
    if (req.method == "GET") {
        get.doGet(req,res);
    } else if (req.method == "POST") {
        post.doPost(req, res);
    } else {
        res.end();
    }
}).listen(8080);

console.log('Server is running ');

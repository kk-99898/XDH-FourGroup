"use strict";

var url = require("url");
var qs = require("querystring");

function doGet(req, res) {
    // 解析get请求,因为get请求表单账号和密码在url中
    var object = qs.parse(url.parse(req.url).query);
    console.log(object);
    res.writeHead(200, { "Content-Type": "text/html" });    //注意格式空格和大小写!!!
    res.write("<html>");
    res.write("<head>");
    res.write("<title>");
    res.write("</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<form method='post'>");
    res.write("username:<input name = 'username' ></input>");
    res.write("password:<input name = 'password' type = 'password' ></input>");
    res.write("<input type = 'submit' ></input>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    res.end();
}

 exports.doGet = doGet;
//module.exports = doGet;
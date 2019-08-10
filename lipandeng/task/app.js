var http = require("http");
var url = require("url");
var qs = require("querystring");

http.createServer(function (req, res) {
    if (req.method == "GET") {
        toGet(req, res);
    } else if (req.method == "POST") {
        toPost(req, res);
    } else {
        res.end();
    }
}).listen(8080);

function toGet(req, res) {
    //解析get请求,因为get请求表单账号和密码在url中
    var object = qs.parse(url.parse(req.url).query);
    console.log(object);
    res.writeHead(200, { "Content-Type": "text/html" });    //注意格式空格和大小写!!!
    res.write("<html>");
    res.write("<head>");
    res.write("<title>");
    res.write("</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<form method='get'>");
    res.write("username:<input name = 'username' ></input>");
    res.write("password:<input name = 'password' type = 'password' ></input>");
    res.write("<input type = 'submit' ></input>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    res.end();
}

function toPost(req, res) {
    var formDate = "";
    req.on("date" , function(date){
        formDate+=date;
    });
    req.on("end" , function(formDate){
        //此时输出的date是buffer(内存)的16进制阿斯玛
        var  object = qs.parse(formDate.toString());
        console.log(object);     
    });
    res.write("success");
    res.end();
}

console.log('Server is running ');

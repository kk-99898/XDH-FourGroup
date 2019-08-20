var http =require('http');
var url = require('url');
var qs = require('querystring');
var fs = require('fs');
const crypto = require('crypto');
http.createServer(function (req,res) {
    if(req.method=='GET'){
        doGet(req,res);
    }else if(req.method == "POST"){
        doPost(req,res);

    }else {
        res.end();
    }

}).listen(1337,'127.0.0.1');

console.log("Server running at httl://127.0.0.1:1337/");

function doGet(req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<html>');
    res.write('<head>');
    res.write('<title>');
    res.write('</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<form method="post">');
    res.write('username:<input name="username">');
    res.write('password:<input name="password" type="password"><input type="submit">');
    res.write('<body>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}

function doPost(req,res) {
    var formData='';
    var obj;
    var arr =Array();
    var d = new Date();
    req.on('data',function (data) {
        formData+=data;
    });
    req.on('end',function () {
        obj = qs.parse(formData);
        const hmac = crypto.createHmac('sha256', 'secret-key');
        hmac.update(obj.password);
        arr[0] = obj.username;
        arr[1] = hmac.digest('hex');
        arr[2] = d.getTime();
        fs.writeFileSync('input.txt', arr);
        console.log(arr);
        output();
        res.write(arr[0]+'\n');
        res.write(arr[1]+'\n');
        x=d.toLocaleString();
        res.write(x+'\n');
        res.end();
    });

}

function output() {
    var data = fs.readFileSync('input.txt', 'utf-8');
    var output = data.split(',');
    var arr = Array();

    for(var i in output){
        if(i==3){
            var d = new Date(Number(output[i]));
            output[i]=d.toLocaleString();
        }
        console.log(output[i]);
    }

}

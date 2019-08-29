var http = require("http");
http.createServer(function (req, res) {
    res.writeHade(200, { "Content -Type": "text/html" });
    res.write("he")
    // res.write("<html>");
    // res.write("<head>");
    // res.write("<title>");
    // res.write("</title>");
    // res.write("</head>");
    // res.write("<body>");
    // res.write("<form method='get'>");
    // res.write("username:<input name = 'username' ></input>");
    // res.write("password:<input name = 'passward' type = 'passward' ></input>");
    // res.write("<input type = 'submit' ></input>");
    // res.write("</form>");
    // res.write("</body>");
    // res.write("</html>");
    res.end();
}).listen(1337,"127.0.0.1");

console.log('Server is running ');
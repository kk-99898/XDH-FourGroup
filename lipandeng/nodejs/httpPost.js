"use strict";
var qs = require("querystring");

function doPost(req, res) {
    var  formData = "";
    //当请求一接到这个数据包就调用function
    //此时输出的date是buffer(内存)的16进制阿斯玛
    req.on("data" , function(data){
        formData+=data;
    });
    req.on("end" , function(){
        var  obj = qs.parse(formData);
        console.log(obj);     
    });
    res.end();
}
//把doPost函数当模块暴露出去
// module.exports = doPost;
exports.doPost = doPost;
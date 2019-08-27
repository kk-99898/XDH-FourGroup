var net=require('net');
var hostname=process.argv[2];
var port=process.argv[3];
var client =net.connect({host:hostname,port:port},function(){
    console.log('connected to server');
    //client.write('我是客户端\r\n');
    //更改为用户自动输入,并将用户输入的内容发送给服务器;
    //设置编码格式,用户可以输入中文;
    process.stdin.setEncoding("utf8");
    //当有键盘输入时,触发这个事件
    process.stdin.on('readable',function(){
        //读取数据
        var chunk=process.stdin.read();
        if(chunk!=null){
            //将输入返回给服务器;
            client.write('data:'+chunk);
        }
    })
});
client.on('data',function(data){
    console.log("服务器说:"+data.toString());
    //client.end();
});
client.on('end',function () {
    console.log('disconnected from server');
});
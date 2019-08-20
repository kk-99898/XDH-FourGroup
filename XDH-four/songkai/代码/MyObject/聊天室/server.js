var net=require('net');
var clientList=[];
var server=net.createServer(function(socket){
    //push方法,向数组中追加这个socket
    clientList.push(socket);
    socket.write('客户端连接服务器成功:success!\r\n');
    //socket.pipe(socket);
    //data 就是接收的客户端传输来的内容
    socket.on('data',function(data){
        console.log("客户端说:"+data.toString());
        //socket.write(data);
        broadcast(data);
    });
    socket.on('end',function () {
        var index=clientList.indexOf(socket);
        clientList.splice(index,1);
        // socket.write('end');
    });
});
//每当接收到客户端发来的消息时,就进行广播,所有连接这个服务器的客户端都会收到这条消息
function broadcast(data){
    for(var i=0;i<clientList.length;i++){
        clientList[i].write(data);
    }
}
//如果有客户端断开链接,就将它从clientList中删除;
server.listen(2222,'127.0.0.1');
//socket=net.connect('http://localhost:2222',{'force new connection':true});


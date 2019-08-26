var net = require("net");
var clientList = [];

var server = net.createServer(function (socket) {
    clientList.push(socket);

    socket.write("success !\r\n");
    //socket.pipe(socket);
    socket.on("data", function (data) {
        console.log(data.toString());
        // socket.write(data);  
        if(clientList.length != 1){
            broadcast(data);
        }
    });
    socket.on("end", function () {
        if(clientList.length ==1){
            socket.write("end!");
        }
        if(clientList.length != 1){
            clientList.length-=1;
        }
    });
}); 

function broadcast(data){
    for(var  i = 0 ; i<clientList.length ; i++ ){
        clientList[i].write(data);
    }
}
server.listen(8080,"127.0.0.1");
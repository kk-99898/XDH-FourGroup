var fs = require('fs');
var data = fs.readFileSync('input.txt', 'utf-8');
var output = data.split(',');
var arr = Array();

for(var i in output){
    if(i==2){
        var d = new Date(Number(output[i]));
        output[i]=d.toLocaleString();
    }
    console.log(output[i]);
}
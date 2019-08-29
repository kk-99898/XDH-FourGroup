'use strict';
var o =4;
var p =2;
var f="*";
test (o,p,f);
function test(o,p,f){
    if(p==1){
        for (var z=1;z<=o;z++){
            for(var a =1;a<=2+z;a++){
                process.stdout.write('  '+f);
            }console.log();
        }

    }
    else{
    process.stdout.write(' '+f+' '+f+' '+f);
    console.log();
    for(var i=1;i<=o-2;i++){
        process.stdout.write(' '+f);
        for(var j=1;j<=3+i-2;j++){
            process.stdout.write('  ');
        }process.stdout.write(' '+f);
        console.log();
    }

    for(var k=1;k<=3+i;k++){
        process.stdout.write(' '+f);
    }}
    
}
'use strict';
var j = 4;
var q= 1;
var f = '&';
test (j,f);

function test(j,f){
    if(q==1||j<=3){
        for(var g=1;g<=j;g++){
            for(var d=g;d<=j;d++){
                process.stdout.write(' '+f);
            }
            console.log();
        }
    } else{
        for(var g=1;g<=j;g++){
            process.stdout.write(' '+f);
        }console.log();
        for(var g=1;g<=j-3;g++){
            process.stdout.write(' '+f);
            for(var d=g;d<=j-3;d++){
                process.stdout.write('  ');
            }
            process.stdout.write(' '+f);
            console.log();
        }  
        process.stdout.write(' '+f+' '+f);
        console.log();
        process.stdout.write(' '+f);
    }
   
}
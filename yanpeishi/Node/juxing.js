'use strict';
var fs = require('fs');
var k =4;
var  t=4;
var f = "*";
var q=1;
test(k,t,f);

function test(k,t,f) {

    if(q==1){
    for(var i = 1;i<=k;i++){  

        for(var j = 1; j<=t;j++){
            process.stdout.write(f+'  ');
            } 
       
        console.log();
    }}
    if (q!=1){


        for(var j = 1; j<=t;j++){
            process.stdout.write(f+'  ');
            } console.log();
            for(var i = 1;i<=k-2;i++){  
                process.stdout.write( f+'  ');
                for(var j = 1; j<=t-2;j++){
                    process.stdout.write("   " );
                    } 
                    process.stdout.write(f+' ');
                console.log();
            }
        for(var j = 1; j<=t;j++){
            process.stdout.write( f+'  ');
       }
     }
    }


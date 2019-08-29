'use strict';
var h = 11;
var p = 2;
var f  = '*';
test(h,p,f);
function test(h,p,f){
    if(p==1){
    for(var k=1;k<=(h+1)/2;k++){
       
        for(var z=1;z<=(h+1)/2-k;z++){
            process.stdout.write('  ');
        }process.stdout.write(''+f);
        if(k>1){
            for(var j=1;j<=2*(k-2);j++){
                process.stdout.write('  ');
            }
            process.stdout.write('   '+f);
        }
        console.log();
    }


    for(var k=(h+1)/2+1;k<=h;k++){
        for(var z=1;z<=k+(h-1)/2-h;z++){
            process.stdout.write('  ');
        }
        process.stdout.write(''+f);
        if(k<h){
            for(var j=1;j<=2*(h-1-k);j++){
                process.stdout.write('  ');
            }
            process.stdout.write('   '+f);
        }
        console.log();
    }
}else{
    for(var k=1;k<=(h+1)/2;k++){
       
        for(var z=1;z<=(h+1)/2-k;z++){
            process.stdout.write('  ');
        }process.stdout.write(' '+f);
        if(k>1){
            for(var j=1;j<=2*(k-1);j++){
                process.stdout.write(' '+f);
            }
            
        }
        console.log();
    }
    for(var k=k=(h+1)/2+1;k<=h;k++){
        for(var z=1;z<=k+(h-1)/2-h;z++){
            process.stdout.write('  ');
        }
        process.stdout.write(' '+f);
        if(k<h){
            for(var j=1;j<=2*(h-k);j++){
                process.stdout.write(' '+f);
            }
           
        }
        console.log();
    }
   

}
}
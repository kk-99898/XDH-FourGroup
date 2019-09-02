"use strict";


var str = "abcdcfg";
var fg = "c"
var x = Array();
var y = 0;
var z = '';
var l = 0;

sp(str,fg);

console.log(x);

function sp(str,n){
    var count1 = 0;
    var count2 = 0;

    for(var i in str){
        count2+=1;
    }

    for(var s in n){
        count1+=1;
    }

    for(l=0;l<(count2);l++){
        var k='';
        for(var j=0;j<count1;j++){
            k+=str[l+j]       
        }
        if(k == n){
            x[y] = z;
            y+=1;
            z ='';
            l+=count1-1;
        }else{
            z += str[l];
        }
                   
    }
    x[y] = z;

}

console.log(str.split(fg));
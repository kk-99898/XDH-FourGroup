'use strict';
var str = "abcdce";
var str1='c';
var count=0;
var count1=0;
var shu=-1;
var str2='';
var str3='';
var str4='';
var p=4;
var c=2;

test(p,c);
function aa(str){
    for (var i in str){
         count++;
    }
 
}
function bb(str1){
    for (var i in str1){
         count1++;
    }
}
function cc(str,str1){
    
    for (var j =0;j<count1;j++){
       
        for (var i =0;i<count;i++){
          
            
            if (str1[j]==str[i]){
                if (count1 ==1){
                    shu=i;
                    return 0;
                }
                if(count1==2){
                    if(str1[j+1]==str[i+1]){
                        shu=i;
                        return 0;
                    }
                }
                for(var k =1;k<count1;k++){
                    while(str1[j+k]!=str[i+k]){
                        break;
                    }
                    if(str1[j+k]==str[i+k]&&k==count1-1){
                        shu =i;
                    }
                }
               
            } 
     
       }
   } 
}

function dd(){
    if(shu!=-1){
        if(count1==2){
            for(var i =0;i<=shu-count1+1;i++){
                str2=str2+str[i];
            }
            for(var i=1;i<count-shu-1;i++){
                str3=str3+str[shu+i+1];
            }
        }else{
        for(var i =0;i<shu-count1+1;i++){
            str2=str2+str[i];
        }
        for(var i=0;i<count-shu-1;i++){
            str3=str3+str[shu+i+1];
        }
    }
    }
    else{
        str2=null;
        str3=null;
    }
}
function test(p,c){
    
    for(var i=0;i<c;i++){
        str4=str4+str[p+i];
    }

}

aa(str);
bb(str1);
cc(str,str1);
dd();
console.log(count);
console.log(count1);
console.log(shu);
console.log(str2);
console.log(str3);
console.log(str4);

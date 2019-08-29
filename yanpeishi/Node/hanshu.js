'use strict';
//
var str = "";
var count = 0;
var count2 = 0;
//
var f = '+';
var arr=[];
var brr=['a'];

var ss='';
var tt='';
function aa(str){
  
     for (var i in str){
          count++;
     }

}
function ee(brr){
  
     for (var j in brr){
          count2++;
     }

}

function bb(){
      for(var j=0;j<=count-1;j++){
        arr[j]=str[j];
      }
}

function cc(f){
     for(var i =0;i<=count-1;i++){
          if(i<count-1){
               var s =arr[i]+f;
          
          }else{
               var s =arr[i];
         }
     ss=ss+s;
     }
}
function dd(f){
     for(var j=0;j<=count2-1;j++){
          if(j<count2-1){
               var t =brr[j]+f;
          
          }else{
               var t =brr[j];
         }
     tt=tt+t;
     }
}
aa(str);
bb();
cc(f);
ee(brr);
dd(f);
console.log(count);
console.log(arr);
console.log(ss);
console.log(count2);
console.log(tt);
//1。字符串长度，，2。分割字符串，，3。通过指定字符合并数组。4。字符串搜索。5。截取字符串
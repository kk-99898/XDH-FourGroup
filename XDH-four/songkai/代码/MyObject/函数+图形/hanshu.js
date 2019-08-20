/*
    length1():统计字符串长度
    str :传入的字符串；
    return：字符串的长度；
 */
function length1(str){
    var str;
    var count=0;
    // for(var i=0;;i++){
    //     if(str[i]){
    //         count++;
    //     }else{
    //         return count;
    //     }
    // }
    for(var i in str){
        count++;
    }
    return count;
}
/*
    split1():分割字符串
    str:要分割的字符串
    s:指定分割的字符
    return：分割后的数组
 */
function split1(str,s) {
    var str;
    var s;
    var arr=[];
    var j = 0;
    var strLength=length1(str);
    var sLength=length1(s);
    for (var i = 0; i <strLength; i++) {
        var b = find(str, s);
       // console.log(b);
        if(b==0){
            str = subStr(str, b+sLength, length1(str)-1);
            arr[j] = str;
        }
        if(b >0) {
            arr[j] = subStr(str, 0, b);
            str = subStr(str, b+sLength, length1(str)-1);
            j++;
        }
        if (b==-1) {
            if (j == 0 && arr[j]=='') {
                //arr[j] = str;
                console.log("字符不存在!");
                break;
            } else {
                if(str!=''){
                     arr[j] = str; 
                }

            }
        }
    }
    return arr;
}
/*
    find();搜索字符的下标
    str:传入的字符串；
    s:要搜索的指定字符；
    return：字符下标
*/
function find(str,s){
    var str;
    var s;
    var strLength=length1(str);
    var sLength=length1(s);
    for(var i=0;i<strLength;i++){
        if(str[i]==s[0]){
            var str1=subStr(str,i,sLength);
            if(str1==s){
                return i;
            }
        }
    }
    return -1;
}
/*
    subStr();截取字符串
    str:传入的字符串；
    start:开始的下标；
    len:截取的长度；
    return :截取的字符串内容
*/
function subStr(str,start,len) {
    var str;
    var start;
    var strLength=length1(str);
    var end=start+len;
    if(len==undefined){
        end=strLength;
    }
    var str1='';
    for(var i=0;i<strLength;i++){
         if(i>=start && i<end){
               str1+=str[i];   
         }

    }
    return str1;
}
/*
    arrayStr();通过指定字符合并数组为字符串
    array:传入的数组；
    s:制定的字符链接符;
    return :拼接后的字符串；
*/
function arrayStr(array,s){
     var array;
     var s;
     var str='';
     var arrayLength=length1(array);
     for(var i=0;i<arrayLength;i++){
         str+=array[i];
         str+=s;
     }
     str=subStr(str,0,length1(str)-1);

     return str;
}
//------------------------------------------------------
// 字符串长度
//  var i=length1('abc');
//  console.log("长度是；"+i);
//  console.log("------------------------------");
//分割字符串
// var arr=split1('aaacfdsaaabaacaaa',"");
// console.log("分割后的数组是：")
// console.log(arr);
// console.log("------------------------------");
// 搜索字符的下标
// var m=find('abcdefg','h');
// hconsole.log("下标是："+m);
// console.log("------------------------------");
// 截取字符串
// var str1=subStr("abcdefg",2,3);
//console.log("截取的字符串内容是："+str1);
// console.log("------------------------------");
// 通过指定字符合并数组为字符串
var str=arrayStr([1],"*");
console.log("拼接后的字符串是："+str);
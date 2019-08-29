"use strict";

// length("");
//输出字符串长度
function length(str) {
    var length = 0;
    //遍历字符串str赋值给i,每遍历一次,计数加一
    for (var i in str) {
        length++;
    }
    console.log("字符串的长度是:" + length);
    return length;
}

// split("abadad", "d");

//分割字符串
function split(str, sp) {
    var n = 0;
    var num = str.length;
    var m = sp.length;
    var arr = Array();
    var str1 = "";
    //当分割单个字符
    if (m == 1) {
        for (var i = 0; i < num; i++) {
            if (str[i] != sp) {
                str1 += str[i];
            } else {
                arr[n] = str1;
                str1 = "";
                n++;
            }
        }
        if (str1 != "") {
            arr[n] = str1;
        }
        console.log(arr);
    }
    //当分割字符为多个时
    if (m > 1 && m <= num) {
        //用来记录每次切割的字符串
        var str1 = "";
        for (var i = 0; i < num; i++) {
            //用来记录j循环之后得到的值
            var str2 = "";
            //每次从原字符串中截取和切割字符串等长的子字符串
            for (var j = i; j < i + m; j++) {
                str2 += str[j];
            }
            var str3 = str1;
            str1 += str[i];
            if (str2 == sp) {
                if (i == 0) {
                    arr[n] = str1;
                    str1 = "";
                } else {
                    arr[n] = str3;
                    str1 = "";
                    str3 = "";
                    n++;
                }
                i = i + m - 1;
            }
        }
        if (str1 != "") {
            arr[n] = str1;
        }
        console.log(arr);
    }
}

// add( ["a"] , "+" )
// 通过指定字符合并数组为字符串
function add(arr, Symbol) {
    var str = " ";
    for (var i = 0; i < arr.length - 1; i++) {
        str = str + arr[i] + Symbol;
    }
    str = str + arr[arr.length - 1];

    console.log(str);
}


// search( "abcdef",  "ab");
// 字符串搜索,,在一长字符串中找出其是否包含某字符串
function search(str, substr) {
    for (var i = 0; i < substr.length; i++) {
        for (var j = 0; j < str.length; j++) {
            //当有一个子串元素
            if (substr[1] == null && substr[0] == str[j]) {
                console.log(j);
                return;
            }
            //当有两个子串元素
            if (substr[2] == null && substr[0] == str[j] && substr[1] == str[j + 1]) {
                console.log(j);
                return;
            }
            //当有三个子串长度
            if (substr[3] == null && substr[0] == str[j] && substr[1] == str[j + 1] && substr[2] == str[j + 2]) {
                console.log(j);
                return;
            }
            //当有4个子串长度
            if (substr[4] == null && substr[0] == str[j] && substr[1] == str[j + 1] && substr[2] == str[j + 2] && substr[3] == str[j + 3]) {
                console.log(j);
                return;
            }
            //当有5个子串长度
            if (substr[5] == null && substr[0] == str[j] && substr[1] == str[j + 1] && substr[2] == str[j + 2] && substr[3] == str[j + 3] && substr[4] == str[j + 4]) {
                console.log(j);
                return;
            }
        }
        console.log("不存在该字符串!");
        return;
    }
}


// cut("abcdefg" , 2, 2  )
//截取字符串
function cut(str, index, length) {
    var arr = " ";
    if (length >= str.length) {
        length = str.length;
    }
    //index控制开始的下标,i控制截取的字符串长度
    for (var i = 1; i <= length; i++) {
        arr = arr + str[index];
        index++;
    }
    console.log(arr);
}


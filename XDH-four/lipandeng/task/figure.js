"use strict";

// square (4, "* ", "* " );
// 打印正方形,,,,注意哦,标志是两个字符
function square(side, full, empty) {
    var str = " ";
    for (var i = 1; i <= side; i++) {
        for (var j = 1; j <= side; j++) {
            if (j == 1 || j == side || i == 1 || i == side) {
                str = str + full;
            } else {
                //空心正方形
                str = str + empty;
            }
        }
        console.log(str);
        str = " ";
    }
}


//打印三角形
// triangle (4, "# " ,  "  ");
function triangle(h, full, empty) {
    var str = " ";
    for (var i = 1; i <= h; i++) {
        for (var j = 1; j <= i; j++) {
            if (j == 1 || j == i || i == h) {
                str = str + full;
            } else {
                //空心
                str = str + empty;
            }
        }
        console.log(str);
        str = " ";
    }
}


// 打印菱形
// diamond (4 , "-" ,  " ");
function diamond(side, full, empty) {
    var str = " ";
    //正等边三角形
    for (var i = 1; i <= side; i++) {
        for (var j = 1; j <= 5 - i; j++) {
            str = str + " ";
        }
        for (var k = 1; k <= 2 * i - 1; k++) {
            //数学归纳法进行判断
            if (k == 2 * i - 1 || k == 1) {
                str = str + full;
            } else {
                str = str + empty;
            }
        }
        console.log(str);
        str = " ";
    }
    //倒正等边三角形
    for (var i = 1; i <= side; i++) {
        for (var j = 1; j <= i + 1; j++) {
            str = str + " ";
        }
        for (var k = 1; k <= 7 - 2 * i; k++) {
            //数学归纳法进行判断
            if (k == 7 - 2 * i || k == 1) {
                str = str + full;
            } else {
                str = str + empty;
            }
        }
        console.log(str);
        str = " ";
    }
}


// hui (8 , 4, "@ " , "  ");
//打印回字型
function hui(outside, inside, full, empty) {
    var str = " ";
    for (var i = 1; i <= outside; i++) {
        for (var j = 1; j <= outside; j++) {
            var x = 1 + (outside - inside) / 2;
            var y = (outside + inside) / 2;
            //外围框架
            var frameOut = (i == 1 || i == outside || j == 1 || j == outside);
            //内部框架
            var frameInner = (i == x || i == y || j == x || j == y);
            //内部范围
            var rang = (i >= x && i <= y && j >= x && j <= y);
            if (frameInner && rang || frameOut) {
                str = str + full;
            } else {
                str = str + empty;
            }
        }
        console.log(str);
        //复位str
        str = " ";
    }
}

trapezium(6, 3 ,"* ","  ");
//打印梯形
function trapezium(h, upside, full, empty, ) {
    var str = " ";
    for (var i = 1; i <= h; i++) {
        for (var j = 1; j < upside; j++) {
            if (i == 1 || i == h || j == 1) {
                str = str + full;
            } else {
                str = str + empty;
            }
        }
        for (var k = 1; k <= i; k++) {
            if (i == 1 || i == h || i == k) {
                str = str + full;
            } else {
                str = str + empty;
            }
        }
        console.log(str);
        str = " ";
    }
}
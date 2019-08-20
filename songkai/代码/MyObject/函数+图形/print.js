/*
    打印正方形 
    type:0--空心；1--实心
    str:填充内容
    line:边长
*/
function printZ(type,str,line){
    var type;
    var str;
    var line;
    var res="";
    //打印实心正方形
    if(type==1){
        for(var i=0;i<line;i++){
            for(var j=0;j<line;j++){
                res+=str+" ";
            }
            res+="\n";
        }
        console.log(res);
    }
    //打印空心正方形
    else{
        for(var i=0;i<line;i++){
            if(i==0 || i==line-1){
                for(var j=0;j<line;j++){
                    res+=str+" ";
                }
                res+="\n";
            }else{
                for(var j=0;j<line;j++){
                    if(j==0 || j==line-1){
                        res+=str+" ";
                    }else{
                        res+="  ";
                    }
                }
                res+="\n";
            }

        }
        console.log(res);
    }
}
/*
    打印三角形  
    type:0--空心；1--实心
    str:填充内容
    line:高度
*/
function printS(type,str,line){
    var type;
    var str;
    var line;
    var res="";
    //打印实心三角形
    if(type==1){
        for(var i=1;i<=line;i++){
            for(var j=1;j<=line-i;j++){
                res+="  ";
            }
            for(var z=1;z<=(2*i-1);z++){
                res+=str+" ";
            }
            res+="\n";
        }
        console.log(res);
    }
    //打印空心三角形
    else{
        for(var i=1;i<=line;i++){
            for(var j=1;j<=line-i;j++){
                res+="  ";
            }
            for(var z=1;z<=(2*i-1);z++){
                if(z==1 || z==(2*i-1) || i==line){
                    res+=str+" ";
                }
                else{
                    res+="  ";
                }
            }
            res+="\n";
        }
        console.log(res);
    }
}
/*
    打印菱形  
    type:0--空心；1--实心
    str:填充内容
    line:长的对角线的长度
*/
function printL(type,str,line) {
    var type;
    var str;
    var line;
    var res = "";
    //打印实心菱形
    if (type == 1) {
        //按照三角形的套路，打印两个三角形进行上下拼接
        for(var i=1;i<=line;i++){
            for(var j=1;j<=line-i;j++){
                res+="  ";
            }
            for(var z=1;z<=(2*i-1);z++){
                res+=str+" ";
            }
            res+="\n";
        }
        for(var i=line-1;i>=1;i--){
            for(var j=1;j<=line-i;j++){
                res+="  ";
            }
            for(var z=1;z<=(2*i-1);z++){
                res+=str+" ";
            }
            res+="\n";
        }
        console.log(res);
    }
    //打印空心菱形
    else{
        for(var i=1;i<=line;i++){
            for(var j=1;j<=line-i;j++){
                res+="  ";
            }
            for(var z=1;z<=(2*i-1);z++){
                if(z==1 || z==(2*i-1)){
                    res+=str+" ";
                }
                else{
                    res+="  ";
                }
            }
            res+="\n";
        }
        for(var i=line-1;i>=1;i--){
            for(var j=1;j<=line-i;j++){
                res+="  ";
            }
            for(var z=1;z<=(2*i-1);z++){
                if(z==1 || z==(2*i-1)){
                    res+=str+" ";
                }
                else{
                    res+="  ";
                }
            }
            res+="\n";
        }
        console.log(res);
    }
}
/*
    打印回字形 
    str:填充内容
    line:边长
*/
function printH(str,line){
    var str;
    var line;
    var res="";
    for(var i=1;i<=line;i++){
        for(var j=1;j<=line;j++){
            if(i==1 || i==line ||j==1||j==line){
                res+=str+" ";
            }
            else if(i==3 && j>=3 && j<=line-2){
                res+=str+" ";
            }
            else if(i==line-2 && j>=3 && j<=line-2){
                res+=str+" ";
            }
            else if(j==3 && i>=3 && i<=line-2){
                res+=str+" ";
            }
            else if(j==line-2 && i>=3 && i<=line-2){
                res+=str+" ";
            }
            else{
                res+="  ";
            }
        }
        res+="\n";
    }
    console.log(res);
}
/*
    打印梯形  
    type:0--空心；1--实心
    str:填充内容
    width:上底宽度
    line:高度
*/
function printT(type,str,width,line){
    var type;
    var str;
    var width;
    var line;
    var res="";
    //打印实心梯形
    if(type==1){
        for(var i=1;i<=line;i++){
            //首先打印空格的内容
            for(var j=1;j<=line-i;j++){
                res+="  ";  //首先打印空格的内容
            }
            //打印梯形的内容
            for(var j=1;j<=width+2*(i-1);j++){
                res+=str+" ";
            }
            res+="\n";
        }
        console.log(res);
    }
    //打印空心梯形
    else{
        for(var i=1;i<=line;i++) {
            //首先打印空格的内容
            for (var j = 1; j <= line - i; j++) {
                res += "  ";
            }
            //打印空心梯形
            for(var j=1;j<=width+2*(i-1);j++){
                if(i==1 ||i==line||j==1||j==width+2*(i-1)){
                    res+=str+" ";
                }
                else{
                    res+="  ";
                }
            }
            res+="\n";
        }
        console.log(res);
    }
}
//打印正方形
// printZ(1,'@',6);
// console.log("----------------------------");
//打印三角形
// printS(1,'#',6);
// console.log("-----------------------------");
//打印菱形
 //printL(0,'*',6);
 //console.log("-----------------------------");
//打印回字
printH('*',8);
// console.log("-----------------------------");
//打印梯形
//  printT(0,'*',3,5);

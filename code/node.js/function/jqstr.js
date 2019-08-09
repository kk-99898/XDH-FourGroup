var start =2;
var length =3
var str = 'abcdefg';

substr(start,length,str);
function substr(x,y,z){
    var gstr = '';
    var count = 0

    for(var i in z){
        count+=1;
    }
    if(x==undefined){
        x = 0
    }

    if(y==undefined||y+x>i){
        for(var j=x;j<count;j++){    
            gstr+=z[j];
        }
        console.log(gstr);
        return;
    }else{
        for(var j=x;j<x+y;j++){    
            gstr+=z[j];
        }
        console.log(gstr);
    }



}



console.log(str.substr(10,100));
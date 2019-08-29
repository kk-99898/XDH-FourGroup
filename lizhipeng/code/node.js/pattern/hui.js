len = 5;
outside = '#'
inside = ' '

hui(len,outside,inside);

function hui(x,y,z){
    var str = '';
    for(var i=0;i<x;i++){
        for(var j=0;j<x;j++){            
            if(i==0||j==0||i==x-1||j==x-1||(i==2&&j!=1&&j!=x-2)||(i==x-3&&j!=1&&j!=x-2)||(j==2&&i!=1&&i!=x-2)||(j==x-3&&i!=1&&i!=x-2)){
                // process.stuout.write(y);
                str+=y;
            }else{
                str+=z;
            }

            if(j==x-1){
                str+='\n'
            }else{
                str+=' ';
            }
            
        }
    }
    console.log(str);
}
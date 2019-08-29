len = 4;
outside = '*'
inside = '*'

square(len,outside,inside);

function square(x,y,z){
    var str = '';
    for(var i=0;i<x;i++){
        for(var j=0;j<x;j++){            
            if(i==0||j==0||i==x-1||j==x-1){
                // process.stuout.write(y);
                str+=y;
            }else{
                str+=z;
            }

            if(j==x-1){
                str+='\n'
            }else{
                str+='  ';
            }
            
        }
    }
    console.log(str);
}
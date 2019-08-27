top = 6;
hg=10
outside = '*'
inside = '×'

tixing(top,hg,outside,inside)

function tixing(x,y,z,v){
    var str= '';
    for(var i=0;i<y;i++){
        for(var j=0;j<y+x;j++){
            if(i==0&&i+j>y||i==y-1&&i+j>y||j==x+y-1||i+j==y){
                // process.stuout.write(y);
                str+=z;
            }else if(i+j>y){
                str+=v
            }else{
                str+=' ';
            }

            if(j==x+y-1){
                str+='\n'
            }else{
                str+=' ';
            }
        }
        
    }
    console.log(str);
}
len = 9;
outside = '-'
inside = '&'

lingxing(len,outside,inside)

function lingxing(x,y,z){
    var str= '';
    for(var i=0;i<x;i++){
        for(var j=0;j<x;j++){
            if(i==j-(x-1)/2||i==j+(x-1)/2||i+j==(x-1)/2||i+j==x+(x-1)/2-1){
                str+=y;
            }else if(i+j>(x-1)/2&&i+j<x+(x-1)/2-1&&i>j-(x-1)/2&&i<j+(x-1)/2){
                str+=z;
            }else{
                str+=' '
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
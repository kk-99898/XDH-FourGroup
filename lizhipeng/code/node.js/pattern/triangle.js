len = 6;
outside = '*'
inside = ' '

triangle(len,outside,inside);

function triangle(x,y,z){

    for(var i=0;i<x;i++){
        var str ='';
        for(var j=0;j<i+1;j++){
            if(j==0||i==x-1||i==j){
                str+=y;  
            }else{
                str+=z;
            }
            if(j==i){
                str+=''
            }else{
                str+=' '
            }
            
        }
        console.log(str);
    }
    

}
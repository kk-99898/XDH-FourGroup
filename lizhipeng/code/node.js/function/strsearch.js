str = 'abcdefg';
sc = '';


strsc(str,sc);
function strsc(x,y){


    if(y==''){
        console.log(0);
        return
    }else{
        var count1 = 0;
        var count2 = 0;
    
        for(var i in x){
            count2+=1;
        }
    
        for(var s in y){
            count1+=1;
        }
    
        for(var l=0;l<(count2);l++){
            var k='';
            for(var j=0;j<count1;j++){
                k+=str[l+j]       
            }

        if(k == y){
            console.log(l);
            return;
            }
        }    
    console.log(-1);
    }

    

}

console.log(str.indexOf(sc));

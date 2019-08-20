var ar = [];
var hb = '-';
// console.log(str);

add(ar,hb);
function add(x,y){
    var count = 0;
    for(i in x){
        count+=1;
    }
    if(count==0){
        console.log('');
    }else if(count==1){
        console.log(x[0]);
    }else{
        var str = '';
        for(var i=0;i<count-1;i++){
            str+=x[i];
            str+=y;
        }
        str+=x[count-1];
        console.log(str);
    }
}
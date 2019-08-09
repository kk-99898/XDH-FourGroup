var imgs=["images/a1.jpeg","images/a2.jpeg","images/a3.jpeg","images/a4.jpeg","images/a5.jpeg","images/a6.jpeg"];
var index=0;
var iv;
window.onload=function(){
	//console.info("1");
	var iv=setInterval("x()",3000);
}

//上一页
function zuo(){
	index--;
	if(index==-1){
		index=imgs.length-1;	
	}
	huan();
}
//下一页
function you(){
	index++;
	if(index==imgs.length){
		index=0;	
	}
	huan();
}
function x(){
	you();
}
//当前页
function biao(i){
	index=i;
	huan();	
	clearInterval(iv);
}
function huan(){
	var a=document.getElementById("a");
	a.src=imgs[index];
	var sls=document.getElementsByTagName("span");
	// console.info(sls1.length);
	// console.log('调试',sls1);
	// return;
	// for (let s of sls1){
	// 	console.log(s);
	// }
	// document.querySelector('#aa')
	// s.classList.add('aa')
	// s.classList.remove('aa')
	// s.classList.toggle('aa')


	// var sls=[];
	// for(var i=0;i<sls1.length;i++){
	// 	sls.push(sls1[i]);
	// }
	// console.log('调试',sls);

	//for(var i in sls){
	for(var i=0;i<sls.length;i++){
			// var a=0;
		// if(sls[i].nodeType==undefined){
			
		// 	a++;
		// 	 console.info("a="+a);
		// 	// console.info("sls[i]="+sls[i]);
		// 	// console.info("sls[i].nodeType="+sls[i].nodeType);
		// 	continue;
		// }
		// if(sls[i]==''){
		// 	var b;
		// 	b++;
		// 	console.info("b="+b);
		// }
		var u1=sls[i].getAttribute("class");

		if(u1=='aa'){
			sls[i].setAttribute("class","");
		}

		if(i==index){
			sls[i].setAttribute("class","aa");
		}
	}	
}


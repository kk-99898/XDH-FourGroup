function login(){
	var youxiang =document.getElementById("youxiang").value.toString();
	//console.info(youxiang);
	var index=youxiang.indexOf("@");
	//console.info(index);
	var name=youxiang.slice(0,index);
	console.info("用户名是"+name);
	var dizhi=youxiang.slice(index+1,youxiang.length-4);
	//console.info(dizhi);
	var youXiangs={"qq":'腾讯邮箱',"163":'网易163邮箱',"126":'网易126邮箱',"sina":'新浪邮箱',"baidu":'百度邮箱',"123":"某某某"};
	
	// var yous=eval('youXiangs.'+dizhi);
	// console.info(yous);
	//console.info(youXiangs);
	if(youXiangs[dizhi]){
			console.info("您的邮箱是："+youXiangs[dizhi]);
			return;
	}
	else{
		console.info("您输入的邮箱不存在!");
		//return;
	}
	 //for(var i in youXiangs){
	//	console.info(i);
	// 	console.info(dizhi);
	// 	if(i==dizhi){
	// 		var xiangs=youXiangs[i];
	// 		console.info("您的邮箱是："+xiangs);
	// 		return;
	// 	}
	// 	else{
	// 		console.info("您输入的邮箱不存在!");
	// 		return;
	// 	}
	// }
	
	//alert(youXiangs["+dizhi+"]);
}

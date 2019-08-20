function login(){

	var phone=document.getElementById("phone").value.toString();

	var pho=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.info(phone);
	var date=new Date();
	var year=date.getFullYear();
	var month=date.getMonth();
	var day=date.getDate();
	var hour=date.getHours();
	var min=date.getMinutes();
	var sec=date.getSeconds();
    if(!pho.test(phone)){ 
  	   alert("邮箱格式有误，请检查!\n系统当前时间是："+year+"年"+month+"月"+day+"日"+hour+":"+min+":"+sec);
       　　 return false; 
    }
	
	alert("邮箱格式正确！\n系统当前时间是："+year+"年"+month+"月"+day+"日"+hour+":"+min+":"+sec);
	//console.info("当前系统时间是："+date);
}


function ajax(url,type,pram,dataType,callback){
	//url 是接口地址,type是get或者post方式,pram是同步或者异步的变量,dataType是否为json格式
	var xhr = null;
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}else {
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	//第2步
	if (type=='get') {
		url +='?'+pram;
	};
	xhr.open(type,url,true);
	var data = null;
	if (type=='post') {
		data = pram;
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//设置请求头
	};
	//第3步 
	xhr.send(data);
	//第4步 
	xhr.onreadystatechange = function (){
		if (xhr.readyState == 4 && xhr.status == 200 ) {
			var dat = xhr.responseText;
			if (dataType == 'json') {
				dat = JSON.parse(dat);
			};
			callback(dat);
		};
	}
}
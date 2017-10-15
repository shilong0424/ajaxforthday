//ajax的封装 
function ajax (url,type,pagram,dataType,callback){
	//第一步
	var xhr = null;
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}else {
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	//第2步
	if (type=='get') {
		url+= '?'+pagram;
	};
	xhr.open(type,url,true);
	var dat = null;
	if (type=='post') {
		dat = pagram;
		//千万不能忘了设置请求头 
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	};
	//第三步
	xhr.send(dat);
	//第四步
	xhr.onreadystatechange = function (){
		if (xhr.readyState == 4 && xhr.status == 200 ) {
			var data = xhr.responseText;
			if (dataType == 'json') {
				data = JSON.parse(data);
			};
			callback(data);
		};
	}
}
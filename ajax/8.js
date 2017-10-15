function ajax (url,type,pram,dataType,callback){
			var xhr = null;
			if (window.XMLHttpRequest) {
				xhr = new XMLHttpRequest();
			}else {
				xhr = new ActiveXObject('Microsoft.XMLHTTP');
			}
			//第2步
			if (type=='get') {
				url += '?'+pram; 
			};
			xhr.open(type,url,true);
			//第3步
			var dat = null;
			if(type=='post'){
				dat = pram;
				//设置请求头
				xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			}
			xhr.send(dat);
			//第4步
			xhr.onreadystatechange =function(data){
				if (xhr.readyState ==4 && xhr.status ==200){
					var data = xhr.responseText;
					if (dataType== 'json') {
						data = JSON.parse(data);
					};
					callback(data);
				};
			}


		}
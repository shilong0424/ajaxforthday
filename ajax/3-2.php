<?php 
	$uname = $_POST['username'];
	$pw = $_POST['password'];
	//echo $uname.'------'.$pw;
	echo '{"username":"'.$uname.'","password":"'.$pw.'"}';//是json格式的数据,所以输出的时候需要转换格式
 ?>
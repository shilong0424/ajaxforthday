<?php 
	$search = $_POST['cccc'];
	$books = array();

	$books['sgyy'] = array('name'=>'三国演义','author'=>'罗贯中','desc'=>'一个混战的年代');
	$books['xyj'] = array('name'=>'西游记','author'=>'吴承恩','desc'=>'神话故事');
	$books['hlm'] = array('name'=>'红楼梦','author'=>'施耐庵','desc'=>'108将的故事');
	$books['shz'] = array('name'=>'水浒传','author'=>'曹雪芹','desc'=>'看不懂');
	// 这里的array_key_exists用来判断数组中没有对应键
	if (array_key_exists($search,$books) == 1 ) {
		$book = $books[$search];
		echo json_encode($book);
	}else {
		echo '{"flag":0}';
	}
 ?>
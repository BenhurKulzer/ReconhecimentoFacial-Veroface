<?php
	$rawData = $_POST['imgBase64'];
	$filteredData = explode(',', $rawData);
	$unencoded = base64_decode($filteredData[1]);
	$randomName = rand(0, 99999);;
	//Create the image 
	$fp = fopen('screens/'.$randomName.'.png', 'w');
	fwrite($fp, $unencoded);
	fclose($fp);
?>
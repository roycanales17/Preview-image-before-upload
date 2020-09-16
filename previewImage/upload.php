
<?php
	include('fetch.php');
	if($_FILES["imageData"]["name"] != '')
	{	
		
		$test = $_FILES["imageData"]["name"];
		$name = pathinfo($test)['filename'];
		$ext = pathinfo($test)['extension'];

		$filename = $name.'.'.$ext;
		$location = 'img/' . $filename;

		move_uploaded_file($_FILES["imageData"]["tmp_name"], $location);
		fetchpost();
	}

?>
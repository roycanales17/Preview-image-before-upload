<?php

	$conn = mysqli_connect("localhost","admin","canales1998","example");

	if (isset($_POST['uploadPost_image'])) {
		
		//Get the json array data.
		$imgData = json_decode(stripslashes($_POST['imageArray']));

		//Create foreach loop to get the array list.
		foreach ($imgData as $img) 
		{	
			$location = 'img/' .$img;
			$query = "INSERT INTO example (`img_name`)VALUES('$location')";
			mysqli_query($conn, $query) or die(mysqli_error($conn));
		}
	}

?>
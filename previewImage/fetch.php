<?php
	
	function fetchpost()
	{
		$conn = mysqli_connect("localhost","admin","canales1998","example");

		$result = mysqli_query($conn,"SELECT * FROM example")or die(mysqli_error($conn));

		if($result->num_rows > 0)
		{
			while ( $row = mysqli_fetch_array($result) ) 
			{
				echo '
					<div class="col">
						<img src="'.$row['img_name'].'">
					</div>';
			}
		}
	}
	
?>
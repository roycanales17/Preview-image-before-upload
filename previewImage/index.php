<?php include('fetch.php'); ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	
	<link rel="stylesheet" type="text/css" href="style.css">

    <title>PREVIEW IMAGE</title>

  </head>

  <body>

    <div class="container-fluid">
    	<br><br>

    	<div class="container">

			<h2>PREVIEW IMAGE</h2>

			<input type="file" id="fileImage" multiple>
			<input type="button" class="btn btn-info" id="select" value="SELECT IMAGE">
			<input type="button" class="btn btn-primary" id="download" value="DOWNLOAD">

			<!-- DISPALY THE IMAGE BEFORE UPLOAD -->
			<div class="preview-image">

			</div>
			
			<br>
			<h2>ALL IMAGES STORED IN FROM YOUR DATABASE</h2>
			<br>
			
			<!-- DISPLAY ALL THE IMAGE YOU HAVE UPLOADED -->
			<div class="image-view">
				<div class="row" id="image-view">

					<?php fetchpost(); ?>

				</div>	

			</div>

    	</div>

    </div>
	
    	
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	
	<script type="text/javascript" src="index.js"></script>
	
  </body>
</html>
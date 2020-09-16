

//If select button is clicked the file button will trigger.
$(document).on('click', '#select', function()
{
	document.getElementById("fileImage").click();

});


//If the file button successfully selected the file, we call the previewImageBeforeUpload function.
document.querySelector('#fileImage').addEventListener("change", previewImageBeforeUpload);


//If you want to cancel image
$(document).on('click', '.btn-danger', function()
{	
	//Get the btn data id because it contains the image id.
	var imageID = $(this).data('id');

	//Get also the data name from button to make sure we click the right image to remove.
	var imageFilename = $(this).data('name');

	//Now we have already the image id, the next thing to do is to find the exact id of div.
	var removeImg = document.getElementById(imageID);

	//Let's try to console the variable to check if it is correct.
	console.log(imageFilename + " || " + imageID);

	//This method is used to remove the div element.
	removeImg.remove();

	//Now even though we remove the div element, the file you select is not yet removed, so let's removed it by here.
	document.getElementById('fileImage').files[imageID].remove;

	//To check if the file you want to remove is success, let's try to alert the filename if it is removed. if it's not working then don't worry, because we will not include the file you want to remove in uploading later.
	alert(document.getElementById('fileImage').files[imageID].name);
});


//This function controls the image preview
function previewImageBeforeUpload() 
{

  //Get the image container for preview.
  var preview = $('.preview-image');

  //Check if the file is exist.
  if (this.files) $.each(this.files, readAndPreview);

  	//If the file is exist we will read all the image details
	function readAndPreview(i, file) 
	{	
		//Check the extension if it is supported by image.
	    if (!/\.(jpe?g|png|gif)$/i.test(file.name)){
	      return alert(file.name +" is not an image");
	    }

	    //All the file selected is stored in FileReader()
	    var reader = new FileReader();
	    reader.readAsDataURL(file);

	    //Get the filename.
	    reader.fileName = file.name;

	    //We use onload to fetch the image selected
		reader.onload = function(readerEvt) 
		{	
			//We create temporary id for button.
			var idKey = "d2tEFIcI8Iu6" + i;

			//Display the image and we assign the image details to html tags.
		    preview.append('<div class="image" id="'+i+'"><img src="'+this.result+'"><br><button class="btn btn-danger" id="'+idKey+'" data-name="'+this.fileName+'" data-id="'+i+'">REMOVE</button></div>');
		};

	}

}

$(document).on('click', '#download', function()
{	
	//First count all the class image.
	var getImageId = document.getElementsByClassName("image");


	//Check if class image contains image view.
	if (getImageId.length > 0) 
    {	
    	//Create imgIdStore to store the image id in array.
    	let imgIdStore = [];
    	//Create imgID to store image id temporary.
    	let imgID = '';

    	//We create for loop to get all the image id stored in class image.
    	for (i = 0; i < getImageId.length; i++) 
        {	
        	//Get the image id every increment.
        	imgID = getImageId[i].id;
        	//Store the image id in array if exist.
        	imgIdStore.push(imgID);
        }	

        //Now we have all the image id, next step is to pass the array in function perimeter to upload it.
        storeFilenameInDatabase(imgIdStore);

   	} else {
   		alert("It seems like you have not select files yet.")
   	}

});

function storeFilenameInDatabase(imgID)
{
   try 
    {
      //Convert array to json string to pass in the server side.
      var jsonString = JSON.stringify(getImageName(imgID));
      $.ajax({
          method: "POST",
          url: 'store.php',
          data: {
            'uploadPost_image':1,
            'imageArray': jsonString,
          },
          success: function(data)
          {
            //If storing filename in database is done, next will call the function upload to move the image to your file database image.
            uploadImage(imgID);
          },
          error: function() 
          {
            alert("Server is down");
          }
        });
    }
    catch(err) 
    {
        alert(err.message);
    }  
}

function uploadImage(imgID)
{	
	//Now we create foreach loop to get the array list.
	imgID.forEach(function(img_id) {

		//Now console the array list to check if we stored the image id perfectly.
		console.log("Image ID list: "+img_id);

		//Now we need to create FormData in order to get all the file stored in input type "FILE".
		var img_data = new FormData();

		//Get all the file you want to upload by using image ID.
        img_data.append("imageData", document.getElementById('fileImage').files[img_id]);

        //We create try and catch to find the error.
        try 
        {	
          $.ajax({
              url:"upload.php",
              method:"POST",
              data: img_data,
              contentType: false,
              cache: false,
              processData: false,
              beforeSend:function()
              {
              	//Check console if the request is processing.
                console.log("Loading..");
              },
              success: function(data)
              {
              	//Clear the preview image if the upload is successfully done.
                $('.preview-image').empty();
                //Fetch the all the image stored from database.
                $('#image-view').html(data);
              },
              error: function() 
              {
                alert("Server is down.");
              }
            });

        }catch(err) {
            alert(err.message);
        } 

	});	
}

//Return the image name by id.
function getImageName(imgID)
{
  let img_name = [];
  let img_temp = '';
  imgID.forEach(function(img_id) 
  {
    img_temp = document.getElementById('fileImage').files[img_id].name;
    img_name.push(img_temp);

  });
  //alert(img_name);
  return img_name;
}
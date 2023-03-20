
    function validation()
{
   var email=document.getElementById("email").value
   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var mobileno=document.getElementById("mobileno").value 
 if( mobileno.length!=10)
 {
    alert(' please enter your valid number');
 }

 else if(email=='')
		{
			alert('Please enter your user email id');
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
		}

      else{
         alert('you have registered successfully');
      }


 
}
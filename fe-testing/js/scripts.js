/*
 * Use this file for all your JavaScript
 */


//blink
$(document).ready(function(){

	 var blink = document.getElementById('blink');
	 
    setInterval(function() {
        blink.style.display = (blink.style.display == 'none' ? '' : 'none');
       
    }, 1000);

	
});


//blink1
$(document).ready(function(){

	
	 var blink1 = document.getElementById('blink1');

    setInterval(function() {
       
        blink1.style.display = (blink1.style.display == 'none' ? '' : 'none');
    }, 1200);

});



$(document).ready( function() {
    $("#load").on("click", function() {
        $( "#content" ).load( "fe-testing/step2.html #step_2" );
    });
});



//email validation
//not used
function checkEmail() {

    var email = document.getElementById('e-mail');
    var filter = "^([a-zA-Z0-9_/./-])+/@(([a-zA-Z0-9/-])+/.)+([a-zA-Z0-9]{2,4})+$";

    if (!filter.test(email.value)) {
        document.getElementById('email_error').innerHTML = "Please provide a valid email address!";
        return false;
    }else{
        document.getElementById('email_error').innerHTML = "";
        return true;
    }
}
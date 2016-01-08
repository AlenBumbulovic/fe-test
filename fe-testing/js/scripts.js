/*
 * Use this file for all your JavaScript
 */


//blink
$(document).ready(function(){

	 var blink = document.getElementById('blink');
	 
    setInterval(function() {
        blink.style.display = (blink.style.display == 'none' ? '' : 'none');
       
    }, 750);

	
});


//blink1
$(document).ready(function(){

	
	 var blink1 = document.getElementById('blink1');

    setInterval(function() {
       
        blink1.style.display = (blink1.style.display == 'none' ? '' : 'none');
    }, 800);

});


//call step2

$(document).ready( function() {
    $("#load").on("click", function() {
        $( "#content" ).load( "step2.html");
        $( "#step2" ).addClass('active');
    });
});


//call step3

$(document).ready( function() {
    $("#load3").on("click", function() {
        $( "#content" ).load( "step3.html");
        $( "#step3" ).addClass('active');
    });
});


//call step4

$(document).ready( function() {
    $("#load4").on("click", function() {
        $( "#content" ).load( "step4.html");
        $( "#step4" ).addClass('active');
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


jQuery(document).ready(function($) {

  
    var email = /^[ ]*([^@@\s]+)@@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;


    jQuery('input#e-mail').bind('input propertychange', function() {
        if (email.test(jQuery(this).val())) {
            jQuery(this).css({
                'background': '#C2D699'
            });
        } else {
            jQuery(this).css({
                'background': '#FFC2C2'
            });
        }
    });
});
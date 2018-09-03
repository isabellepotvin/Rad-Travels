$(document).ready(function(){

//alert for sent message
	$(".contact").submit(function(event){
		event.preventDefault();
		alert("Your message has been sent!");
	});

});
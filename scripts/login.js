$(document).ready(function(){

//alert for login
	$(".loginForm").submit(function(event){
		event.preventDefault();
		alert("You have logged in.");
	});

//alert for sign up
	$(".signUpForm").submit(function(event){
		event.preventDefault();
		alert("Thanks for signing up!");
	});


//tabs
	//initially hide sign up section
	$("#signUp").hide();

	//adds class of 'active' to clicked tab and hides/displays content
	$("#tabs li").click(function(){
		$("#content section").clearQueue().hide();

		$(".active").removeClass("active");
		$(this).addClass("active");

		contentId = this.getAttribute("data-content");
		$(contentId).clearQueue().show();

	});

});


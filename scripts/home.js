$(document).ready(function(){

//alert for subscription
	$(".subscribe").submit(function(event){
		event.preventDefault();
		alert("Thanks for subscribing!");
	});

//smooth scroll
	$("#scrollDown").click(function(event){
		event.preventDefault();

		var offsetTop = $("#companyDescription").offset();
		
		$("html, body").animate(
		    { scrollTop: offsetTop.top },
		    1000
		);
	});

//drop down menu
	var active = false;
	$(".dropDown").click(function(event){
		if (active){
			$("#nav").removeClass("active");
			$(".dropDown").removeClass("active");
			active = false
		}else{
			$("#nav").addClass("active");
			$(".dropDown").addClass("active");
			active = true
		}
	});
	$("#nav").click(function(event){
		if (active){
			$(this).removeClass("active");
			$(".dropDown").removeClass("active");
			active = false
		}
	});
	$(".cross").click(function(event){
		if (active){
			$("#nav").removeClass("active");
			$(".dropDown").removeClass("active");
			active = false
		}
	});

//appends login on small screens
	//when page loads
	var screenWidth = $(window).width();
	if (screenWidth <= 1024){
		$("#nav").each(function(){
			$(this).find(".login").appendTo(this);
		});
	}else{
		$("#nav").each(function(){
			$(this).find(".mainNav").appendTo(this);
		});
	}

	//when window is resized
	$(window).resize(function(){
		screenWidth = $(window).width();

		if (screenWidth <= 1024){
			$("#nav").each(function(){
				$(this).find(".login").appendTo(this);
			});
		}else{
			$("#nav").each(function(){
				$(this).find(".mainNav").appendTo(this);
			});
		}
	});	

});

$(document).ready(function(){

//function that vertically centers larger pictures
	function vertCenter(){
		var heightImg = $("div#bigImg img").height();
		var heightScreen = $(window).height();
		var padding = $("div#bigImg div").css("padding");
		padding = parseInt(padding, 10);

		var marginImg = (heightScreen - heightImg) / 2 - padding;

		$("div#bigImg.active img").css("margin-top", marginImg);
	}

//function that vertically centers slideshow buttons
	function vertCenterButtons(){
		var heightButton = $("#buttons p").height();
		var heightScreen = $(window).height();
		var padding = $("div#bigImg div").css("padding");
		padding = parseInt(padding, 10);

		var marginButton = (heightScreen - heightButton) / 2;

		$("div#buttons").css("top", marginButton + "px");
	}

//click on picture to show larger version
	$("#bigImg").hide();
	$("#buttons").hide();
	var activeImg = false;

	$('#contentGall img').click(function(){
		var source = $(this).attr("src");
		var alt = $(this).attr("alt");
		var data = $(this).attr("data-img");

		$("#bigImg img").attr("src", source);
		$("#bigImg img").attr("alt", alt);
		$("#bigImg img").attr("data-img", data);

		if(activeImg){

		}else{
			$("#bigImg").addClass("active");
			$("#bigImg").show();
			$("#buttons").show();
			activeImg = true
		}

		vertCenter();
		vertCenterButtons();

	});

//hides large image when it is clicked
	$("#bigImg").click(function(){
		if(activeImg){
			$("#bigImg").removeClass("active");
			$("#bigImg").hide();
			$("#buttons").hide();
			activeImg = false
		}

	});


//next button (slideshow)
	$("#next").click(function(){
		var nextData = $("#bigImg img").attr("data-img");
		var data = Number(nextData) + 1;

		if (data > 55){
			data = 55;
			alert("You have reached the end of the slideshow.");
		}

		var source = $("[data-img=" + data + "]").attr("src");
		var alt = $("[data-img=" + data + "]").attr("alt");


		$("#bigImg img").attr("src", source);
		$("#bigImg img").attr("alt", alt);
		$("#bigImg img").attr("data-img", data);

		vertCenter();

	});

//previous button (slideshow)
	$("#previous").click(function(){
		var nextData = $("#bigImg img").attr("data-img");
		var data = Number(nextData) - 1;

		if (data < 1){
			data = 1;
			alert("You have reached the beginning of the slideshow.");
		}

		var source = $("[data-img=" + data + "]").attr("src");
		var alt = $("[data-img=" + data + "]").attr("alt");


		$("#bigImg img").attr("src", source);
		$("#bigImg img").attr("alt", alt);
		$("#bigImg img").attr("data-img", data);

		vertCenter();

	});


//vertically centers slideshow when window is resized
	$(window).resize(function(){
		vertCenter();
		vertCenterButtons();
	});


});
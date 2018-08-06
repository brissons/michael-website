$(document).ready(function(){
	
	//Navbar button
	$("#hamburgerButton").click(function(){
		$(this).toggleClass("is-active");
		$("#navBarMenu").fadeToggle(200, "linear");
	 });

	//rotates arrow when clicked
	$(".rotate").click(function () {
		$(this).toggleClass("down");
	});
	
	//Hides navigation bar when scrolling down
	var prev = 0;
	var difference = 0;
	
	$(window).scroll(function() {
		var topOfScreen = $(window).scrollTop();
		
		if(topOfScreen > 375) {
			
			//scroll up
			if(topOfScreen < prev) {
				if(difference > 300) {				
					$("#navBar").fadeIn(200);
					difference = 0;
				}
				else {
					difference += prev-topOfScreen;
				}
			}
			else {//scroll down
				$("#navBar").fadeOut(200);
				$("#navBarMenu").fadeOut(200);
				$(".hamburger").removeClass("is-active");
			}
			
			prev = topOfScreen;
			
		}
		else {
			if(!$("#navBar").is(":visible")) {
				$("#navBar").fadeIn(200);
			}
		}
	});

});
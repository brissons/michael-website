$(document).ready(function(){
	 
	//Navbar button
	$(".hamburgerButton").click(function(){
		$(".hamburgerButton").toggleClass("is-active");
		$("#navBarMenuMobile").fadeToggle(200, "linear");
		$("#navBarMenu").fadeToggle(200, "linear");
	 });
	 

	//rotates arrow when clicked
	$(".rotate").click(function () {
		$(this).toggleClass("down");
	});
	
	//Hides navigation bar when scrolling
	$(window).scroll(function() {
		$("#navBarMenuMobile").fadeOut(200);
		$("#navBarMenu").fadeOut(200);
		$(".hamburgerButton").removeClass("is-active");

	});

});
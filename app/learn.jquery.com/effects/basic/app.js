/*
 * testing of basic effects.
 * http://learn.jquery.com/effects/intro-to-effects/
 * 
 * */

// jquery dom ready function.
$(function(){
	
	// basic effects.
	$("#div_1").hide("slow");
	$("#div_2").show("slow");
	$("#div_3").slideUp(4000);
	$("#div_4").slideDown(20000);
	// behind the scene, the hide and show use slideup and slidedown
	
	// toggle. delay 10 seconds before you start it.
	$("#div_5").delay(10000).toggle(10000);
	
	// fade out / fade in
	$("#div_6").fadeOut(10000).fadeIn(2000);
	$("#div_7").fadeIn(10000);
	
	// animate function
	$("#div_7").animate(
		{
			left: "+=500",
			opacity: 0.25
		},
		3000, // Duration
		function() { // Callback when the animation is finished
			console.log( "done!" );
		}
	);
});
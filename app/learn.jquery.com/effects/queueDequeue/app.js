/*
 * testing of basic effects.
 * http://learn.jquery.com/effects/intro-to-effects/
 * 
 * easing information is here.
 * http://api.jquery.com/animate/
 * 
 * */

// jquery dom ready function.
$(function(){
	
	// animate function
	$("#div_8").animate(
		// uses css events.
		// i think you need both the width and height set.
		// and absolute position to use the left property
		// at a minimun, you need to set the css position property to relative.
		{
			left: ["800px", "linear"],
			opacity: 0.50
		},
		5000, // Duration
		function() { // Callback when the animation is finished
			console.log( "done!" );
		}
	);
	// animate function
	$("#div_9").animate(
		// uses css events.
		{
			left: ["800px", "swing"]
		},
		5000, // Duration
		function() { // Callback when the animation is finished
			console.log( "done!" );
		}
	);
	
});
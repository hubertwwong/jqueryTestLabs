/*
 * testing of basic effects.
 * http://learn.jquery.com/effects/intro-to-effects/
 * 
 * easing information is here.
 * http://api.jquery.com/animate/
 * 
 * */

// pause plugin from the jquery tutorial.
$.fn.pause = function( n ) {
	return this.queue(function() {
		var el = this;
		setTimeout(function() {
			return $( el ).dequeue();
		}, n );
	});
};

// jquery dom ready function.
$(function(){
	
	// animate function
	// note aboout animantions...
	// all animations start at the same time if you don't add a pause function
	// 
	$("#div_8").animate(
		// uses css events.
		// i think you need both the width and height set.
		// and absolute position to use the left property
		// at a minimun, you need to set the css position property to relative.
		{
			left: ["200px", "linear"],
			opacity: 0.50
		},
		5000, // Duration
		function() { // Callback when the animation is finished
			console.log( "done!" );
		}
	).pause(5000).queue(function() {
		// if you take the pause the pause plugin function out.
		// the box will be queue baby at the start of the animation.
		$("#div_8").html("queue baby..");
	}).dequeue().animate({
		// if you remove the dequeue
		// this wont trigger...
		height: 150
	});
	
});
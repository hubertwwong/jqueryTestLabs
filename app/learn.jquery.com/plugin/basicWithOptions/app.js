/*
 * jquery plugin test.
 * 
 * http://learn.jquery.com/plugins/basic-plugin-creation/
 * 
 * remember:
 * consolidate small plugin in to larger ones to redue the foot print. 
 * use a param object to which sub function to run.
 * 
 * */

// souped up greenify.
// protect the jquery object
(function ( $ ) {
	$.fn.greenify = function( options ) {
		// This is the easiest way to have default options.
		var settings = $.extend({
			// These are the defaults.
			color: "#556b2f",
			backgroundColor: "white"
		}, options );
		
		// Greenify the collection based on the settings variable.
		return this.css({
			color: settings.color,
			backgroundColor: settings.backgroundColor
		});
	};
}( jQuery ));

// jquery dom ready function.
$(function(){
	// the class wont be added if you don't return the this object.
	$("#div_8").greenify().addClass("greenified");
	
	// overriding the color option.
	$("#div_9").greenify({color: "#777777", backgroundColor: "black"}).addClass("greenified");
});
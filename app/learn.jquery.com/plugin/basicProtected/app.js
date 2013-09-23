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
(function ($) {
	// put plugin under fn object if you want to use it as
	// a jquery object.
	$.fn.greenify = function() {
		this.css( "color", "green" );
		return this;
	};
	// if you need to call an object based off a jquery node,
	// use this format. remove the fn.
	$.ltrim = function( str ) {
		return str.replace( /^\s+/, "" );
	};
	$.rtrim = function( str ) {
		return str.replace( /\s+$/, "" );
	};
}( jQuery ));

// jquery dom ready function.
$(function(){
	// the class wont be added if you don't return the this object.
	$("#div_8").greenify().addClass( "greenified" );
	
	//testing out lstrip and rstrip.
	var aaaa = $("#div_9 h1").html();
	console.log("trim testing.");
	console.log("orig [" + aaaa + "]");
	console.log("ltrim [" + $.ltrim(aaaa) + "]");
	console.log("rtrim [" + $.rtrim(aaaa) + "]");
});
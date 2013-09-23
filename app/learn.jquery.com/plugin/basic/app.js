/*
 * jquery plugin test.
 * 
 * */

// turns stuff green.
// basically $.fn.yourPluginName.
// you probably need to use a unique naming scheme.
$.fn.greenify = function() {
	// this for the current node.
	this.css( "color", "green" );
	// always return this on your plugins.
	// allows chaining.
	return this;
};

// jquery dom ready function.
$(function(){
	// the class wont be added if you don't return the this object.
	$("#div_8").greenify().addClass( "greenified" );
});
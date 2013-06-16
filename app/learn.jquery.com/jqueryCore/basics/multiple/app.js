/*
 * a slightly more compliated loader functino.
 * 
 * if for some reason, you need to wait for the images and other stuff to load.
 * an example of all three main jquery function is included.
 * 
 * */

// jquery dom ready function.
$(function(){
	// dom is loaded.
	console.log("dom is loaded");
});

$(window).load(function() {
 	// executes when complete page is fully loaded, including all frames, objects and images
 	// generally you don't use this.
 	console.log("window is loaded");
});

$(window).unload(function() {
	// executes after leaving the page.
	console.log("moved away from the page");
});
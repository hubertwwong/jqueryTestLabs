/*
 * testing out the attr attributes.
 * the attr attributes allows properties of the html tags.
 * 
 * */

// jquery dom ready function.
$(function(){
	
	// basic event.
	$( "#helloBtn" ).click(function( event ) {
		alert( "Hello." );
	});
	
	// having multiple events.
	// adding some of the event properties into the enter and exit functions.
	// keep in mind that the event object has a lot of properties you can use to debug
	// scripts. just showing off x and y coords for this example.
	$( "div" ).on( "mouseenter mouseleave", function( event ) {
		console.log( "mouse hovered over or left a div" );
	});
	$( "div" ).on( "mouseenter", function( event ) {
		var x = event.pageX;
		var y = event.pageY;
		$("#status").html("entering div [" + x + "][" + y + "]");
		
	});
	$( "div" ).on( "mouseleave", function( event ) {
		var x = event.pageX;
		var y = event.pageY;
		$("#status").html("leaving div [" + x + "][" + y + "]");
	});
	
	// event will only be fired once.
	// useful to use this to do some setup.
	$( "#helloBtn3" ).one( "click", function( event ) {
		alert( "event fired. will not be fired again." );
		$( this ).click(function() {
			console.log( "You have clicked this before!" );
		});
	});
	
	// event will only be fired once.
	// using the off event to disconnect it.
	$( "#helloBtn2" ).on( "click", function() {
		alert( "event fired. will not be fired again." );
		$( "#helloBtn2" ).off( "click");
	});
	
	// should print fooid2
	console.log($("p").attr("id"));
});
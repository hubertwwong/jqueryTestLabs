/*
 * events.
 * 
 * this is a basic custom event. from learn.jquery.com
 * */

// jquery dom ready function.
$(function(){
	
	// this is the behavior that you want to happen.
	// state is now in the light bulb and not the switches.
	$( ".lightbulb" ).on( "changeState", function( e ) {
		var $light = $( this );
		if ( $light.hasClass( "on" ) ) {
			$light.removeClass( "on" ).addClass( "off" );
			$light.css("background-color", "black");
		} 
		else {
			$light.removeClass( "off" ).addClass( "on" );
			$light.css("background-color", "yellow");
		}
	});
	
	// this is where you are tagging the event to the dom element.
	//
	// it seems like you still have to define what event start the whole thing.
	// in this case, its the click / on or whatever.
	// the event is encapsulated.
	// i'm guessing that you have code the custom event so it doesn't trigger
	// everything. 
	$( ".switch, .clapper" ).click(function() {
		$( this ).parent().find( ".lightbulb" ).trigger( "changeState" );
	});

});
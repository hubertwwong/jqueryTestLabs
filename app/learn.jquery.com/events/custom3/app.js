/*
 * events.
 * 
 * this is a basic custom event. from learn.jquery.com
 * 
 * */

// jquery dom ready function.
$(function(){
	
	// this is the behavior that you want to happen.
	// 2. go here next.
	// this is using states to trigger custom events in which you define the behavior.
	// also.
	// note that changeState, turnOn, and turnOff are the custom event.
	// in this case, you are using the changeState to organize other events.
	$( ".lightbulb" ).on( "changeState", function( e ) {
		var $light = $( this );
		if ( $light.hasClass( "on" ) ) {
			$light.trigger( "turnOff" );
		} 
		else {
			$light.trigger( "turnOn" );
		}
	}).on( "turnOn", function( e ) {
		$( this ).removeClass( "off" ).addClass( "on" );
		$( this ).css("background-color", "black");
	}).on( "turnOff", function( e ) {
		$( this ).removeClass( "on" ).addClass( "off" );
		$( this ).css("background-color", "yellow");
	});
	
	// noticed that you don't need to change anything to get the switches to work independently
	// to get them to work.
	// 1. start here..
	$( ".switch, .clapper" ).click(function() {
		$( this ).parent().find( ".lightbulb" ).trigger( "changeState" );
	});

	// 1. start here..
	$( "#master_switch" ).click(function() {
		if ( $( ".lightbulb.on" ).length ) {
			$( ".lightbulb" ).trigger( "turnOff" );
		} 
		else {
			$( ".lightbulb" ).trigger( "turnOn" );
		}
	});

});
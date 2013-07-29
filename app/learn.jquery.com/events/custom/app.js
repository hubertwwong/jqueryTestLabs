/*
 * events.
 * custom ones. the first test is to fake it with on and if else statements.
 * not using the method that jquery is recommending.
 * 
 * */

// jquery dom ready function.
$(function(){
	
	$( ".switch, .clapper" ).click(function() {
		// dom element for the light bulb.
		var $light = $( this ).parent().find( ".lightbulb" );
		
		// toggling class for light bulb.
		if ( $light.hasClass( "on" ) ) {
			$light.removeClass( "on" ).addClass( "off" );
			$light.css("background-color", "black");
		} 
		else {
			$light.removeClass( "off" ).addClass( "on" );
			$light.css("background-color", "yellow");
		}
	});
	
});
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
	
	// jquery 1.7 
	//
	// keep in mind that lots of events.
	// like bind, click, and others are done in the backend using on.
	$( "#helloBtn2" ).on( "click", sayHello2 );
	function sayHello2( event ) {
		alert( "Hello." );
	}
	
	// Logging an event's information
	$( "form" ).on( "submit", function( event ) {
		// Prevent the form's default submission.
		event.preventDefault();
		// Prevent event from bubbling up DOM tree, prohibiting delegation
		//event.stopPropagation();
		// Log the event object for inspectin'
		console.log( event );
		// Make an AJAX request to submit the form data
	});
	
	// should print fooid2
	console.log($("p").attr("id"));
});
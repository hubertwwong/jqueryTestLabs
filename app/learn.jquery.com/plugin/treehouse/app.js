/*
 * jquery plugin test.
 * 
 * http://blog.teamtreehouse.com/writing-your-own-jquery-plugins
 * 
 * a simple hello world plugin test by treehouse.
 * seems like it it has the best practices of what a basic jquery plugin needs.
 * 
 * */

(function($) {
    $.fn.helloWorld = function( options ) {
        // Establish our default settings
        var settings = $.extend({
            text         : 'Hello, World!',
            color        : null,
            fontStyle    : null,
            complete     : null
        }, options);
        // complete takes a function call.
        // not sure how the security of this is.

        return this.each( function() {
            $(this).text( settings.text );

		    if ( settings.color ) {
		        $(this).css( 'color', settings.color );
		    }
		
		    if ( settings.fontStyle ) {
		        $(this).css( 'font-style', settings.fontStyle );
		    }
		    
		    if ( $.isFunction( settings.complete ) ) {
        		settings.complete.call( this );
    		}
        });
    };
}(jQuery));

// jquery dom ready function.
$(function(){
	// hello world.. passing custom params.
	$("#div_8").helloWorld({
		text: 'OVERRIDE THE TEXT',
		color: 'red'
	});
	
	// call back function usage..
	$("#div_9").helloWorld({
		complete : function() { 
			alert('Done!'); 
		}
	});
});
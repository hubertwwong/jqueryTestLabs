/*
 * CSS selectors.
 * 
 * keep in mind that this and attr is different.
 * if you want to set css using the attr property
 * you do it thru style.
 * 
 * */

// jquery dom ready function.
$(function(){
	
	// single setting.
	$("p#fooID1").css('fontSize', '13px');
	
	// Setting multiple properties.
	$("p#fooID1").css({
	    fontSize: "100px",
	    color: "red"
	});
	
	// fetch the property that you just set.
	console.log($("p#fooID1").css("fontSize"));
	
	// toggling
	// =======================================================================
	
	// css class toggling is useful for a lot of stuff.
	// jquery provides some functions to operate them.
	$("p#fooID2").removeClass("fooClass");
	$("p#fooID2").toggleClass("fooClass");
	$("p#fooID2").addClass("barClass");
	$("p#fooID2").addClass("bar2Class");
	
	// dimensions.
	// =======================================================================
	
	// so keep in mind that the dimension elements
	// use html numbers like px and %.
	// need to pass in the values as a stringg if you want to do it.
	
	$("div").width("1000px");
	$("div").height("300px");
	console.log($( "div" ).position());
});
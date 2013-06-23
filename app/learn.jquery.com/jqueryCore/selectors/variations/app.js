/*
 * selectors.
 * the way you are selecting dom elements to manipulate.
 * you are probably using it already.
 *
 * $("someHTML")
 *
 * some notes about them will be in the comments.
 * 
 * */

// jquery dom ready function.
$(function(){
	// selector.
	// ======================================================================= 
	
	// if you assign them to a variable, it won't go thru the dom again
	// so you should probably do this when possible.
	// also, should should prefix the variable with $ so you know its a
	// jquery object.
	var $pSel = $("p");
	
	// testing selector
	// =======================================================================
	
	// if you need to test them, you can put them in if blocks.
	// use the length attributes.
	// if its 0, its a falsey value and will return false.
	if ($pSel.length) {
		console.log("pSelctor contains a dom node");
	}
	else {
		console.log("pSelctor does not contain a dom node.");
	}
	
	// refining selectors
	// =======================================================================
	
	// if you need to refine to specifc selectors you can use these helpers.
	// a few examples are below.
	//
	// NOTE:
	// these selectors refer to the first element.
	// the modifiers.
	
	var $divPSel = $("div").has( "p" );
	console.log("there is " + $divPSel.length + " node that contains p elements");
	
	var $divPSel2 = $("div").not( "h1" );
	console.log("there is " + $divPSel2.length + " div node that does not contain h1");
	
	// this is a selector that is selecting the child elemnts.
	// rather than the parent nodes.
	// using css.
	var $divPSel3 = $("div p");
	console.log("there is " + $divPSel3.length + " p nodes inside the div");
	
	// here is another way using the find method.
	// this is faster so you should probably use this method.
	var $divPSel4 = $("div").find("p");
	console.log("there is " + $divPSel4.length + " p nodes inside the div");
	
	// some refinements using list.
	var $ul1 = $( "ul li" ).filter( ".current" ); 	// unordered list items with class of current
	console.log("selected " + $ul1.html());
	var $ul2 = $( "ul li" ).first();              	// just the first unordered list item
	console.log("selected " + $ul2.html());
	var $ul3 = $( "ul li" ).eq( 2 );              	// the third.
	console.log("selected " + $ul3.html());
	
	// pseudo selectors.
	// =======================================================================
	
	// jquery provide some pseudo CSS
	// to help you select various elements that are not appart of the 
	// offical css selectors.
	// to use them you need to prefix them with the color operator.
	//
	// also know that there are form specific selectors
	// keep that in mind if you need them.
	//
	// a few examples below
	
	var $divPFirst = $( "div p:first" );
	console.log("selecting first div p that contains " + $divPFirst.html());
	
	// remember the list and all elements
	// start at zero.
	// so this is saying to select all elements greater that 2nd item.
	// a.k.a, the last item.
	var $liThird = $("ul li:gt(1)");
	console.log("the third element " + $liThird.html());
	
});
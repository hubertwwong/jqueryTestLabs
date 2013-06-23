/*
 * manipulating elements.
 * 
 * once you select the dom elements, here is stuff you can do with it.
 * 
 * */

// jquery dom ready function.
$(function(){
	// stuff you do when you get to an element.
	// =======================================================================
	
	// keep in mind that many of these methods are both setters and getters.
	var $pSel1 = $("p[id='fooID']");
	console.log($pSel1.html() + " html() to get contents.");
	console.log($pSel1.text() + " text() to get text. html to be stripped.");
	// note that you need to specifly an value for attributes
	console.log($pSel1.attr("id") + " attr() to get attributes.");
	console.log($pSel1.position() + " position() to get position in the dom. need to use it relative to another element");
	//console.log($pSel1.val() + " val() to get value. usually used for forms");
	
	// copying, removing, moving, etc...
	// =======================================================================
	
	// .insertAfter() and .after()
	// .insertBefore() and .before()
	// .prependTo() and .prepend()
	// .appendTo() and .append()
	//
	// the above are common methods that you can use. 
	// keep in mind that if there is a second word to it, stuff like "to, after, before"
	// the left side is the thing you are operating to.
	//
	// example below will illustrate.
	
	// insert
	// =======================================================================
	
	// using insert after.
	var $targetDomElement = $("p[id='fooID']");
	var $elemToInsert1 = $("<p>using insert after</p>");
	$($elemToInsert1).insertAfter($targetDomElement);
	
	// using insert.
	var $elemToInsert2 = $("<p>using insert</p>");
	$targetDomElement.after($elemToInsert2);
	
	// also note that the first lines, of the examples above,
	// you are creating dom elements.
	
	// removing...
	// =======================================================================
	
	// removing the last p
	var $elemToRemove = $("p[id='bar3']");
	$elemToRemove.remove();
	
	
});
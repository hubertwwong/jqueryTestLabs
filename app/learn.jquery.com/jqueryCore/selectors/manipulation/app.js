/*
 * traversing
 * 
 * these are some methods if you need to traverse
 * around in the dom elemnts.
 * 
 * might nor might not be that useful.
 * chances are that you are going to be using a framework.
 * so you probably don't have to interate over the
 * elements.
 * 
 * */

// jquery dom ready function.
$(function(){
	// parents
	// =======================================================================
	
	console.log($("div#child1").parent().attr("id"));
	
	// returns 3.
	// if you use parents instead of parent,
	// it returns an array of values.
	console.log($("div#child1").parents().length);
	
	// parents
	// =======================================================================
	
	// this should return 2
	// for the 2 divs directly under parent1.
	// > for direct childrent for the css selector.
	console.log($("body > div").children().length);
	
	// this find all of the ancestors.
	// of body > div
	// so it picks up both parents and the for childs.
	console.log($("body > div").find("div").length);
	
	// siblings
	// =======================================================================
	
	// goes to child2
	console.log($("div#child1").next().attr("id"));
	
	// goes to child1
	console.log($("div#child2").prev().attr("id"));
	
	// gets 3 other divs.
	// siblings returns all others siblings
	console.log($("div#child3").siblings().length);
});
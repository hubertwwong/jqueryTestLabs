/*
 * getter and setters
 * 
 * jquery overloads variabables as methods.
 * that allow chaining.
 * */

// jquery dom ready function.
$(function(){
	// getter / setters
	// =======================================================================
	
	// if you use the HTML() method with 0 args, its a getter.
	var $pSel1 = $("p").html();
	//console.log($pSel1);
	
	// if you pass it a string, it becomes a selector
	// remember the thing with selectors is that have to be really specific.
	// in this case, since its not specific, it modified 2 p elements.
	var $pSel2 = $("p[id='bar2']").html("fooo barrrrr");
	
	// chaining
	// =======================================================================
	
	// every jquery object returns a reference to the jquery object.
	// this allows you to chain multiple statements.
	
	// so you can do this.
	var $pSel3 = $("div").find("p").css("id", "fooID").html();
	console.log($pSel3);
	
	// or this.
	// where you find by text.
	// the number of node founds.
	// this should return the same thing from above.
	var $pSel4 = $("div")
					.find("p")
					.eq(1)
					.html();
	console.log($pSel4);
});
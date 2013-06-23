/*
 * testing out the attr attributes.
 * the attr attributes allows properties of the html tags.
 * 
 * */

// jquery dom ready function.
$(function(){
	// SETTERS ATTR
	
	// short form.
	// setting the id attribute to bar
	$("p").attr("id", "bar");
	
	// long form.
	// you are passing an object literal.
	// and can set as many values as you want.
	$("p").attr({
		id : 'foo2id',
		class : 'foo2class'
	});
	
	// GETTERS ATTR
	
	// should print fooid2
	console.log($("p").attr("id"));
});
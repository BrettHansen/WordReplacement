var all_elements = $("*");
var replace = [["now", "meow"],
			   ["Now", "Meow"]]
$.each(all_elements, function() {
	if(this != undefined) {
		for(var i = 0; i < replace.length; i++) {
			findAndReplaceDOMText(this, {
				preset: 'prose',
				find: replace[i][0],
				replace: replace[i][1]
			});
		}
	}
});
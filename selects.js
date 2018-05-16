[].forEach.call(document.querySelectorAll('.block-1'), function(node) {
	var bsh = getComputedStyle(node).boxShadow;
	node.style.boxShadow = "inset "+bsh;
});
document.querySelector('select').onchange = function() {
	var node = document.querySelector("." + this.value);
	    document.querySelector('.content').style.boxShadow = getComputedStyle(node).boxShadow;
 
};

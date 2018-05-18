[].forEach.call(document.querySelectorAll('.block'), function(node) {
	node.onmouseover = function() {
	    document.querySelector('.card__content').style.boxShadow = getComputedStyle(node).boxShadow;
        }
	node.onmouseleave = function() {
	    document.querySelector('.card__content').style.boxShadow = "";
        }
});
document.querySelector('select').onchange = function() {
	var node = document.querySelector("." + this.value);
	    document.querySelector('.card__content').style.boxShadow = getComputedStyle(node).boxShadow;
 
};
[].forEach.call(document.querySelectorAll(''), function(node) {
	var bsh = getComputedStyle(node).boxShadow;
	node.style.boxShadow = "inset "+bsh;
});

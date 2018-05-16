document.querySelector('select').onchange = function() {
	var node = document.querySelector("." + this.value);
	    document.querySelector('.card__content').style.boxShadow = getComputedStyle(node).boxShadow;
 
};

(function(){
	var calc = function(){
		var docElement = document.documentElement;
		var clientWidthValue = docElement.clientWidth > 750 ? 750 : docElement.clientWidth;
		docElement.style.fontSize = 20*(clientWidthValue/500) + 'px';
	}
	calc();
	window.addEventListener('resize',calc);
})();
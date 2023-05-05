window.addEventListener("load", main, false);

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);
    function jsLoaded() {
	if (document.getElementsByTagName('code') != null) {
	    codeTags = document.getElementsByTagName('code') 
	    clearInterval(jsInitCheckTimer);
	    for (var i = 0; i < codeTags.length; i++) {
		codeTags[i].setAttribute('translate', 'no');
	    }
	    for (var i = 0; i < codeTags.length; i++) {
		codeTags[i].setAttribute('class', 'notranslate');
	    }
	}
    }
};

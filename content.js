window.addEventListener("load", main, false);

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);
    function jsLoaded() {
	if (document.getElementsByTagName('code') != null) {
	    codeTags = document.getElementsByTagName('code') 
	    clearInterval(jsInitCheckTimer);
	    for (var i = 0; i < codeTags.length; i++) {
		codeTags[i].setAttribute('translate', 'no');
		codeTags[i].setAttribute('class', 'notranslate');
	    }
	    preTags = document.getElementsByTagName('pre') 
	    for (var i = 0; i < preTags.length; i++) {
		preTags[i].setAttribute('translate', 'no');
		preTags[i].setAttribute('class', 'notranslate');
	    }
	}
    }
};

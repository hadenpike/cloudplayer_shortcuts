// ==UserScript==
// @name Cloudplayer shortcuts
// @version 1.0
// @description Add more shortcuts to the Audible cloudplayer
// @author Haden Pike
// @license MIT
// @matches https://www.audible.com/webplayer?*
// ==/UserScript==

document.addEventListener("keydown", function(evt) {
    let keyCode = evt.which;
    if (keyCode === 83) {
	evt.preventDefault();
	document.getElementsByClassName("currentSpeed")[0].click();
    }
}, false);

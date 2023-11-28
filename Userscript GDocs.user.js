// ==UserScript==
// @name         Userscript GDocs
// @version      1.00
// @description  all my homies hate genome.
// @author       you know who i am.
// @match        https://docs.google.com/spreadsheets/d/*
// @match        https://docs.google.com/document/d/*
// @match        https://docs.google.com/presentation/d/*
// @match        https://docs.google.com/forms/d/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @noframes
// ==/UserScript==


const element = document.querySelector ("#hub-styles")

const removeElement = () => {
    element.remove();
};

setInterval(removeElement, 100)
setTimeout(removeElement, 10)

window.onload = element.remove();
document.onload = element.remove();
window.onopen = element.remove();
document.onopen = element.remove();
window.ononline = element.remove();
document.ononline = element.remove();
window.onpageshow = element.remove();
document.onpageshow = element.remove();
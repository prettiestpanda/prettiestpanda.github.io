'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	console.log("Javascript is connected!");
}

$(".projects .img-thumbnail").click(projectClick);

function projectClick(e) {
	e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).css("background-color", "#808080");
    $(this).parent().next().toggle();
    return false;
}
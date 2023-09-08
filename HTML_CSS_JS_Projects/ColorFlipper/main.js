/**
 * What we want the thing to do:
 * First set some random color to be the background for the body (as the page loads)
 * Then display the color of the background as a text item
 * 
 * Add an event listner to the button so when the button is clicked, background changes
 * Backgrounds change to Red + Text changes to say "Red"
 */


// First figure out how to set a variable to be the color
let bgColor = 'blue';

// since tag name is an array, must select the first element
document.getElementsByTagName("body")[0].style.backgroundColor = bgColor;
document.getElementById("bgColor").innerHTML = bgColor;
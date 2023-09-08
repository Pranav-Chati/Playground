/**
 * What we want the thing to do:
 * First set some random color to be the background for the body (as the page loads)
 * Then display the color of the background as a text item
 *
 * Add an event listner to the button so when the button is clicked, background changes
 * Backgrounds change to Red + Text changes to say "Red"
 */

let bgColor = ["blue", "red"];
let counter = 0;

let body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = bgColor[counter];

let bgColorTag = document.getElementById("bgColor");
bgColorTag.innerHTML = bgColor[counter];
bgColorTag.style.color = bgColor[counter];

// Event Listener for On Click

// document.getElementById("changeColor").addEventListener("click", () => {
//   console.log("hello world");
// });

// document.getElementById("changeColor").addEventListener("click", tester);
// function tester() {
//    console.log("hello world");
// }

document
  .getElementById("changeColor")
  .addEventListener(
    "click",
    changeBackgroundColor,
  );

function changeBackgroundColor() {
    counter += 1;
    body.style.backgroundColor = bgColor[counter % 2];

    bgColorTag.innerHTML = bgColor[counter % 2];
    bgColorTag.style.color = bgColor[counter % 2];
    console.log(counter);

}

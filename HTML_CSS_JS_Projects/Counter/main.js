/*
 * Three buttons = 3 event listeners;
 */

let decreaseBtn = document.getElementById("decreaseBtn");
let increaseBtn = document.getElementById("increaseBtn");
let resetBtn = document.getElementById("resetBtn");

let counter = 0;
let counterVal = document.getElementById("counterVal");
counterVal.innerHTML = counter;

decreaseBtn.addEventListener("click", decreaseCounter);
increaseBtn.addEventListener("click", increaseCounter);
resetBtn.addEventListener("click", resetCounter);

function decreaseCounter() {
  counter -= 1;
  changeColorText(counter);
}

function increaseCounter() {
  counter += 1;
  changeColorText(counter);
}

function resetCounter() {
  counter = 0;
  changeColorText(counter);
}

function changeColorText(counter) {
  counterVal.innerHTML = counter;
  if (counter > 0) {
    counterVal.style.color = "green";
  } else if (counter == 0) {
    counterVal.style.color = "black";
  } else {
    counterVal.style.color = "red";
  }
}

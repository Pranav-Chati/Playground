//Set an array of days of the week
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();

//Create the todays-task-list header
let headerText = document.createElement("h3");
let headerTextContent = document.createTextNode(
  `Here are the tasks for ${
    daysOfTheWeek[date.getDay()]
  }, ${date.toLocaleDateString()}`
);
headerText.appendChild(headerTextContent);
document.getElementById("todays-task-list").appendChild(headerText);

//Listen for the event Listener
const btn = document.querySelector(".btn");

//Event Listener for Form Submission
btn.addEventListener("click", (e) => {
  e.preventDefault();

  //console.log(e);
  const taskNameInput = document.querySelector(".task-name-input");

  //Create a new list item
  let listElement = document.createElement("li");

  //create the text to go into the list element
  let textItem = document.createTextNode(taskNameInput.value);

  //append text to the list item
  listElement.appendChild(textItem);

  //add listElement to list on HTML
  document.getElementById("todo-list").appendChild(listElement);
});

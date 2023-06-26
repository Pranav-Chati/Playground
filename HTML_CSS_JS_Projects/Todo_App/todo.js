// Set an array of days of the week
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

// Create the todays-task-list header
let headerText = document.createElement("h3");
let headerTextContent = document.createTextNode(
  `Here are the tasks for ${
    daysOfTheWeek[date.getDay()]
  }, ${date.toLocaleDateString()}`
);
headerText.appendChild(headerTextContent);
document.querySelector("#header-task-list").appendChild(headerText);

// Listen for the event Listener
const btn = document.querySelector(".btn");

// Event Listener for Form Submission
btn.addEventListener("click", (e) => {
  e.preventDefault();

  // Define variables for the input fields
  const taskNameInput = document.querySelector(".task-name-input");
  const dueDateInput = document.querySelector(".task-due-date-input");

  // Define a variable for the table
  const taskTable = document.getElementById("todo-list");

  // Conditional to make sure task input is not empty
  if (taskNameInputCheck(taskNameInput.value)) {
    /*
  if (valid Date is True) {
    //continue with program
  } else {
    //give an alert message saying that the date is not entered correctly
    // highlight the due date box red for 2 seconds
  }
  */
    // Create a new list item
    let newRow = document.createElement("tr");
    let taskElement = document.createElement("th");
    let dateElement = document.createElement("th");

    // Append the respective text to the element
    taskElement.appendChild(document.createTextNode(taskNameInput.value));
    dateElement.appendChild(document.createTextNode(dueDateInput.value));

    // Append the column values to the row
    newRow.appendChild(taskElement);
    newRow.appendChild(dateElement);

    // Append the row to the table
    taskTable.appendChild(newRow);
  }
});

function checkDateFormat() {}

function taskNameInputCheck(taskName) {
  if (taskName.length == 0) {
    return false;
  } else if (taskName.length >= 1) {
    //TODO: Make sure to check that the first letter is not a space
    return true;
  }
}

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
  const taskTable = document.querySelector("#todo-task-list");

  // Conditional to make sure task input is not empty
  if (taskNameInputCheck(taskNameInput.value)) {
    if (checkDateFormat(dueDateInput.value)) {
      // Create a new list item
      let newRow = document.createElement("tr");
      let taskElement = document.createElement("th");
      let dateElement = document.createElement("th");

      // Append the respective text to the element
      taskElement.appendChild(document.createTextNode(taskNameInput.value));
      dateElement.appendChild(
        document.createTextNode(
          tableDateValue(dueDateInput.value, daysOfTheWeek)
        )
      );

      // Append the column values to the row
      newRow.appendChild(taskElement);
      newRow.appendChild(dateElement);

      // Append the row to the table
      taskTable.appendChild(newRow);

      // Clear the Values in the Input Fields in the HTML
      taskNameInput.value = "";
      dueDateInput.value = "mm/dd/yyyy";
    } else {
      // Date format is incorrect
      alert("Please add a date with the specified format mm/dd/yyyy");
    }
  } else {
    // Text Format is incorrect
    alert(
      "Please enter a correctly formatted task name with no spaces at the beginning."
    );
  }
});

function checkDateFormat(dateString) {
  const todaysDate = new Date();

  // Split the dateString into three numbers
  const dateNumbers = dateString.split("/");

  // Make sure the date is a date AND is ahead of the current date
  const checkMonth =
    dateNumbers[0] >= todaysDate.getMonth() && dateNumbers[0] <= 12;

  // Either the month is greater or the day is greater
  const checkDay =
    dateNumbers[0] > todaysDate.getMonth() ||
    gi(dateNumbers[1] >= todaysDate.getDate() && dateNumbers[1] <= 31);
  const checkYear = dateNumbers[2] >= todaysDate.getFullYear();

  return checkMonth && checkDay && checkYear;
}

// Function to create the proper string that gets entered into the table
function tableDateValue(dateString, daysArray) {
  const date = new Date(dateString);
  return `${daysArray[date.getDay()]}, ${date.toLocaleDateString()}`;
}

function taskNameInputCheck(taskName) {
  if (taskName.length == 0) {
    return false;
  } else if (taskName.length >= 1) {
    //TODO: Make sure to check that the first letter is not a space
    return true;
  }
}

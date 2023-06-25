const btn = document.querySelector(".btn");

const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const date = new Date();

let headerText = document.createElement("h3");
let headerTextContent = document.createTextNode(`Here are the tasks for ${daysOfTheWeek[date.getDay()]}, ${date.toLocaleDateString()}`);
headerText.appendChild(headerTextContent);
document.getElementById("DateItem").appendChild(headerText);

//Event Listener for Form Submission
btn.addEventListener('click', (e) => {
    e.preventDefault();

    //console.log(e);
    const todoInput = document.querySelector("#todo_input")

    //Create a new list item   
    let listElement = document.createElement("li");

    //create the text to go into the list element
    let textItem = document.createTextNode(todoInput.value);
    
    //append text to the list item
    listElement.appendChild(textItem);

    //add listElement to list on HTML
    document.getElementById("todos").appendChild(listElement);
});
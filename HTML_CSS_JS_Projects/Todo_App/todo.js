const btn = document.querySelector(".btn");

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
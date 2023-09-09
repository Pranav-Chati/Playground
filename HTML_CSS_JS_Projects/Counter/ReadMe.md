**Name: Pranav Chati**
**Project Title: Counter**
**Tech Stack: HTML / CSS / JS**
**Date: 09.08.2023**

## Learnings
**First Learning**
I ran into an interesting error which I recreated below:

`let counter = 0;`
`let decreaseBtn = document.getElementById("decreaseBtn");`
`decreaseBtn.addEventListener("click", decreaseCounter);`

`function decreaseCounter (counter) { `
    `counter -=1;`
    `changeColorText (counter);`
`}`

In this code above, counter was being shown as a object PointerEvent. I realized that when calling the function from the EventListener, the function makes the `counter` variable a pointer event which get spassed as an argument into the decreaseCounter. Removing it as a parameter and using `counter` within the application is allowed primarily because it's in scope (`counter` was initialized as a global variable)
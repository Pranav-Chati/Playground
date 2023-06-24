//Alerts
alert("Hello World");

//Printing stuff
console.log("Hello World")

// let and const
// var is not used as much anymore
//data types: String, Numbers, Boolean, null, and undefined

const fName = 'Pranav'; //string
const age = 19; //number
const rating = 4.3; //number
const isCool = true; //boolean
const x = null; //this is an error with ES1 where null typeof is object
const y = undefined; //undefined
let z; //undefined

console.log ("Pranav is very cool");
console.log (fName + ' is very cool and is ' + age + ' years old')
//Template String — allows variables inside of text
console.log(`${fName} is very cool and he is ${age} years old.`);

//Arrays
const fruits = ['apples', 'oranges', 'pears']; //by using const, you can't reassign the array
// fruits = [] <-- is not allowed
fruits[3] = 'grape'; // adding an element to the very last element

//Array Functions
fruits.push('mangos'); //push 'mangos' to the back
fruits.pop(); //pops the last element off
fruits.unshift('strawberry'); //adds 'strawberry' at the start
console.log(Array.isArray(fruits)); //checks whether something is an array or not
console.log(fruits.indexOf('oranges')); //gives the index of the value


//Object Literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['tennis', 'boxing', 'running'],
    address: {
        street: 'Elm Street',
        city: 'Boston', 
        state: 'MA',
    },
}

//add a property
person.email = 'john@gmail.com'

console.log(person);
console.log(person.firstName);
console.log(person.firstName, person.lastName);

//Destructuing
const { firstName, lastName, address: { city }} = person; //pulling these variables out
console.log(firstName);


const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Dentist Appointment',
        isCompleted: false,
    },
];

console.log (todos);
console.log (todos[1].text)

const todosJSON = JSON.stringify(todos);
console.log(todosJSON); 

//for loops
for (let i = 0; i < todos.length; i ++) {
    console.log(todos[i].text);
}

//high order For Loops: forEach, Map, filter
todos.forEach(function(todo) { //todo is the variable name for each item
    console.log(todo.text)
})

//Map
const todoText = todos.map(function(todo) {
    return todo.text;
});

//the map returns a new array with all the specified values
console.log(todoText);

//Filters out all the values that have the expression
const todoCompleted = todos.filter(function(todo) {
    //this can be a boolean as well to help filter more of the values out
    return todo.isCompleted;
});

console.log(todoCompleted);

//chaining the filter and map out
const todoCompleted1 = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});

console.log(todoCompleted);


//Functions
function addNums ( num1, num2 ) {
    console.log ( num1 + num2 );
}

addNums (5,4);
addNums(); //returns NaN

// setting default values so when someone does addNums (), it does not return NaN
function subNums ( num1 = 10, num2 = 5) {
    console.log (num1 - num2);
}

//other opportunities to create a function, arrow functions
const addNums2 = ( num1 = 1, num2 = 1) => num1 + num2;


//Functions that act like an object literal, indicated by a capital name
function Person (fname, lname, dob) {
    this.fname = fname;
    this.lname = lname;
    this.dob = new Date(dob);

    //by doing this, when you console.log (person), you will see the functions listed as a value
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    };
    this.getFullName = () => `${this.fname} ${this.lname}`;
}

const person1 = new Person ("John", "Smith", "01-08-2002");

console.log (person1.getBirthYear());
console.log (person1.getFullName());
console.log (person1);

//a better way to create functions
function NewPerson (fname, lname, dob) {
    this.fname = fname;
    this.lname = lname;
    this.dob = new Date(dob);
}

NewPerson.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

NewPerson.prototype.getFullName = function() {
    return `${this.fname} ${this.lname}`;
};

const person2 = new NewPerson ("Jane", "Doe", "04-05-1991");

console.log (person2.getBirthYear());
console.log (person2.getFullName());
console.log (person2);

// making a new type of class with ES6
class Student {
    constructor (fname, lname, dob, studentID, major) {
        this.fname = fname;
        this.lname = lname;
        this.dob = new Date(dob);
        this.studentID = studentID;
        this.major = major;
    };

    getFullName() {
        return `${this.fname} ${this.lname}`;
    }
}

const student = new Student ("John", "Doe", "09-09-2000", "503924", "CSE");
console.log (student);


console.log (window);
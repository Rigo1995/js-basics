//this is my first javascript code!
console.log("Hello World");
//Tips
//*Use camel casing
//*JS is case sensitive 

//Primitive Types---
//string
let name = "Rigobeto";
let lastName = "Ramirez-Pascual";
//number
let age = 23;
const interestRate = 0.3;
//boolean
let isApproved = false;
//object
let selectColor = null;

//refrence Types---
//(1)--object
let person = {
    name: "Rigoberto",
    age: 23
};
//Dot Notation (best practice)
person.name = "Rigo";

//Braket Notation
let selection = "name";
person["name"] = "Maria";
console.log(person);

//(2) Arrays (used to store a list)
//*used to represent a list of items
//*index is the location of the element starting with 0
//*an array is a type of object
let selectColors = ["red", "blue"];
selectColors[2] = 1;
console.log(selectColors.length);

//(3)functions
//*the logic happens here
//*performs a task
//*calculates a value

//performing a task
function greet(name, lastName) {
    console.log("Hello " + name + "" + lastName);
}

//calculating a value 
function square(number) {
    return number * number;
}
//greet("Rigo ", "Ramirez-Pascual ");

console.log(square(2));
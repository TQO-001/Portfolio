//  Function
function Dash(num) {
    let dash = "";
    for(let i = 0; i <= num; ++i) dash += "____";
    console.log(dash);
}

//  Data Types
Dash(5);
console.log("Data Types");

let str = "Hello";
let num = 42;
let isActive = true;
let emptyValue = null;
let notDefined;

console.log(typeof str, typeof num, typeof isActive, typeof emptyValue, typeof notDefined);

//  Operators
Dash(5);
console.log("Operators");

let sum = 5 + 3;
let product = 6 * 3;
let remainder = 10 % 3;

console.log(sum, product, remainder);

//  Assignment Operators
Dash(5);
console.log("Assignment Operators");

let x = 10;
x += 5;
x *= 2;
console.log(x);

//  String Concatenation
Dash(5);
console.log("String Concatenation");

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log(fullName);

//  Template Literals
let age = 25;
let message = `My name is ${firstName} and I am ${age} years old.`;
console.log(message);
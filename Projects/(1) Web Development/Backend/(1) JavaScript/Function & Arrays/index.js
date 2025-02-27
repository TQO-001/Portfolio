function Dash(num, type) {
    if(type.toLowerCase() === "dash" || type.toLowerCase() === undefined) console.log("_____".repeat(num), "\n");
    else if(type.toLowerCase() === "equal") console.log("=====".repeat(num));
    else console.log("*ERROR*".repeat(num));
}

function Heading(name) {
    Dash(8, "equal");
    console.log(" ", name.toUpperCase());
    Dash(8, "equal");
}

let numeral = 1;
function SubHeading(name, num, restart) {
    if(restart === 1) numeral = 1;

    if(num === 1) {
        console.log(`*(${numeral}) ${name} *`)
        Dash(6, "dash")
    }
    else if(num === 2) {
        Dash(6, "dash")
        console.log(`*(${numeral}) ${name} *`)
        Dash(6, "dash")
    }
    else if(num === undefined) {
        console.log(`*(${numeral}) ${name} *`)
        Dash(6, "dash")
    }
    else console.log("*ERROR*".repeat(num));
    ++numeral;
}
/*
----------------------------------------------
    Function
----------------------------------------------
*/

Heading("Functions")
//  (1) Function Declaration (Named Function)
SubHeading("Function Declaration (Named Function)", 2);
function greet(name) {
    return `Hello, ${name}!`
}
console.log(greet("John"));

//  More efficient way
function Greet(name) {
    console.log(`Hello, ${name}!`);
}
Greet("Jeff");

//  (2) Function Expressions (Anonymous Function)
SubHeading("Function Expressions (Anonymous Function)", 2);
const square = function (num) {
    return num*num;
}
console.log(square(5));

//  More efficient way
const sq = function (num) {
    console.log(num * num);
}
sq(6);

//  (3) Arrow Functions (Shorter Syntax)
SubHeading("Arrow Functions (Shorter Syntax)", 2);
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

/*
----------------------------------------------
    Arrays
----------------------------------------------
*/

Heading("Arrays")
//  Declaring Arrays
SubHeading("Declaring Arrays", 2, 1);
let numbers = [10, 20, 30, 40];
let fruits = ["Apple", "Banana", "Cherry"];

console.log("Numbers: ", numbers);
console.log("Fruits: ", fruits);

//  Accessing Elements
SubHeading("Accessing Elements", 2);
console.log(fruits[0]);
console.log(fruits.length);

//  Modifying Arrays
SubHeading("Modifying Arrays", 2);
fruits.pop();
fruits.push("Orange");
fruits.shift();
fruits.unshift("Mango");
console.log(fruits);


Heading("Looping Through Arrays")
//  for loop
SubHeading("for loop", 2, 1);
for(let i  = 0; i < fruits.length; ++i) console.log(fruits[i]);
//  for loop
SubHeading("foreach loop (Recommended)", 2);
fruits.forEach(fruit => console.log(fruit));

/*
----------------------------------------------
    Exercise
----------------------------------------------
*/
Heading("Exercise")
function squareArray(arr) {
    arr.map(item => item**2);
    console.log(arr);
}

squareArray([2, 4, 6]); // Output: [4, 16, 36]

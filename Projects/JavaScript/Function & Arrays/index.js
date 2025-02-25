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
function SubHeading(name, num) {
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
    Function & Arrays
----------------------------------------------
*/

Heading("Functions")

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


SubHeading("Arrow Functions (Shorter Syntax)", 2);
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

function Dash(num, type) {
    if(type.toLowerCase() === "dash" || type.toLowerCase() === undefined) console.log("_____".repeat(num), "\n");
    else if(type.toLowerCase() === "equal") console.log("=====".repeat(num));
    else console.log("*ERROR*".repeat(num));
}

function Heading(name) {
    Dash(6, "equal");
    console.log(" ", name.toUpperCase());
    Dash(6, "equal");
}

function SubHeading(name, num) {
    if(num === 1) {
        console.log(`* ${name} *`)
        Dash(4, "dash")
    }
    else if(num === 2) {
        Dash(4, "dash")
        console.log(`* ${name} *`)
        Dash(4, "dash")
    }
    else if(num === undefined) {
        console.log(`* ${name} *`)
        Dash(4, "dash")
    }
    else console.log("*ERROR*".repeat(num));
}
/*
----------------------------------------------
    Switch Statement
----------------------------------------------
*/

Heading("Switch Statement")

let day = "Monday";

switch(day) {
    case "Monday": 
        console.log("Start of the week.");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("It's a regular day.");
}

console.log("\n");


/*
----------------------------------------------
    Loops (for, while, do-while)
----------------------------------------------
*/ 
Heading("Loops");
SubHeading("For Loop");
for(let i = 1; i <= 5; i++) {
    console.log("Iteration: ", i)
}

SubHeading("While Loop", 2);
let x = 1;
while(x <= 5) {
    console.log("Iteration: ", x);
    x++;
}

SubHeading("Do-While Loop", 2);
let y = 1;
do {
    console.log("Iteration: ", y);
    y++;
} while (y <= 5);

console.log("\n");

/*
----------------------------------------------
    Fibonacci Sequence
----------------------------------------------
*/ 
Heading("Fibonacci Sequence")

let a = 1, b = 0, c, termSequence = 12;

for(let i = 0; i <= termSequence; ++i) {
    if(a === 1) console.log(`Month ${i}: ${a} pair`);
    else console.log(`Month ${i}: ${a} pairs`);
    c = b;
    b = a;
    a = a + c;
}

console.log("\n");

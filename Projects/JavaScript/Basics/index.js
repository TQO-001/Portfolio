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
SubHeading("(1) For Loop");
for(let i = 1; i <= 5; i++) {
    console.log("Iteration: ", i)
}

SubHeading("(2) While Loop", 2);
let x = 1;
while(x <= 5) {
    console.log("Iteration: ", x);
    x++;
}

SubHeading("(3) Do-While Loop", 2);
let y = 1;
do {
    console.log("Iteration: ", y);
    y++;
} while (y <= 5);

console.log('\n');

/*
----------------------------------------------
    Break & Continue
----------------------------------------------
*/
Heading("Break & Continue")

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

console.log('\n');

for (let i = 1; i <= 5; i++) {
    console.log(i); // we want to print the i before breaking
    if (i === 3) {
        break;
    }
}

console.log('\n');

/*
----------------------------------------------
    EXERCISE: Fizzbuzz
----------------------------------------------
*/ 
Heading("EXERCISE: FizzBuzz")

for(let i = 1; i <= 50; ++i) {
    if(i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
    else if(i % 3 === 0) console.log('Fizz');
    else if(i % 5 === 0) console.log('Buzz');
    else console.log(i)
}
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

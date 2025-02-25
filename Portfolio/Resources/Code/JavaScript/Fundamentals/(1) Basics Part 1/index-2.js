document.getElementById("name").innerHTML = "James Dean";
document.getElementById("age").innerHTML = 25;

console.log(`My name is ${name} and I am ${age} years old`);

/*  ALTERNATE METHOD:
    
    const nameElement = document.getElementById("name");
    const ageElement = document.getElementById("age");

    const name = "James Dean";
    const age = 25;

    nameElement.innerHTML = name;
    ageElement.innerHTML = age;

    console.log(`My name is ${name} and I am ${age} years old`);
*/
var name = "John", 
    age = 25;

/*
    When used within functions like console.log(), the comma acts as an argument seperator.
    It indicates that you're passing multiple distinct values to the function.
    The space is added automatically by the function, so you don't need to add it manually.
*/
console.log("My name is", name, "and I am", age, "years old")

/*
    The + operator is used for explicit string concatenation. 
    This means you're telling the program to create a single,
    new string by joining the provided strings together.
*/
console.log("My name is " + name + " and I am " + age + " years old")

/*
    Template literals are a more modern way of string concatenation.
    They're similar to the + operator, but they're more readable and easier to use.
    They're also more flexible, as they can handle more complex string manipulation.
*/
console.log(`My name is ${name} and I am ${age} years old`)
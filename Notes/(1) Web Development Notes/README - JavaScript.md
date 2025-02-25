# **Introduction to JavaScript**

## **1. What is JavaScript?**

- **JavaScript** is a programming language used to create dynamic and interactive elements on websites.
- It is primarily used to:
    - Manipulate HTML and CSS.
    - Create interactive web elements (e.g., buttons, forms).
    - Handle events (e.g., clicks, keystrokes).
    - Perform asynchronous tasks (e.g., fetching data from an API).

## **2. Why Use JavaScript?**
 
- **Interactivity**: JavaScript allows you to add interactivity to your websites (e.g., pop-ups, animations, form validation).
- **Control**: It enables the control of the web page's behaviour without needing to reload or interact with the server.
- **Versatility**: JavaScript can be used on both the client-side (in the browser) and the server-side (using Node.js).
- **Extensibility**: It has a rich ecosystem of libraries and frameworks (e.g., React, Angular, Vue.js) that help in building complex applications.

### JavaScript Engine
Each browser uses a unique JavaScript engine that interprets and runs JavaScript code. Below are the engines used by some of the most popular browsers:

| Browser        | JavaScript Engine |
|----------------|-------------------|
| Chrome         | V8                |
| Firefox        | SpiderMonkey      |
| Safari         | JavaScript Core   |
| Microsoft Edge | Chakra            |

---

## **3. JavaScript Syntax**

### Basic Structure of JavaScript Code:

```javascript
// This is a single-line comment

/*
   This is a multi-line comment
   that spans multiple lines
*/

// Declaration of a variable
let x = 5;

// Declaring a function
function greet() {
    console.log("Hello, world!");
}
```

- **Variable Declaration**: `let` and `const` are used to declare variables. `var` is also used but less common in modern JavaScript due to issues with scope.
    - `let`: Used for variables that can be reassigned.
    - `const`: Used for constants (values that cannot be reassigned).
	- **`var`**: The traditional way to declare variables (function-scoped).


---

## **4. Variables and Data Types**

### Variable Declaration:

```javascript
let name = "John";  // String
const age = 30;      // Number
let isActive = true; // Boolean
```


### JavaScript Comparisons

| Operator | Description                                 |
| -------- | ------------------------------------------- |
| `==`     | loose equality (compares value and type)    |
| `===`    | Strict equality (compares value and type)   |
| `!==`    | Strict inequality (compares value and type) |
| `>=`     | Greater than or equal to                    |
| `<=`     | Less than or equal to                       |
| `>`      | Greater than                                |
| `<`      | Less than                                   |

Examples:
```javascript
3 == "3"     // true (loose equality)
3 === "3"    // false (strict equality)
```

### **JavaScript Logical Operators**

| Operator | Description |
| -------- | ----------- |
| `&&`     | Logical AND |
| `\|\|`   | Logical OR  |
| `!`      | Logical NOT |

Examples:
```javascript
true && false   // false
true || false   // true
!true           // false
```

### JavaScript Types

JavaScript has different data types, which include both primitive and complex types:

1. **Number**  
   Used for both integers and floating-point numbers.

   Examples:
   ```javascript
   10 + 2    // 12
   10 - 2    // 8
   2 * 2     // 4
   10 / 2    // 5
   10 % 3    // 1 (modulus: remainder of division)
   ```

2. **String**  
   A sequence of characters used to represent text.

   Examples:
   ```javascript
   "Hello" + "world!"    // "Helloworld!"
   "Hello " + "world!"   // "Hello world!"
   'This isn\'t very nice'  // Correct handling of single quote
   10 + "34"    // "1034" (string concatenation)
   10 - "7"     // 3 (implicit type conversion)
   "hello" - "bye"  // NaN (Not a Number, invalid operation)
   ```
   
3. **Boolean**  
   Represents logical entities with two values: `true` or `false`.

   Examples:
   ```javascript
   3 > 2         // true
   5 >= 5        // true
   3 === 3       // true (strict equality)
   3 !== 3       // false (strict inequality)
   
   true + true   // 2 (true is treated as 1)
   false + true  // 1
   "A" > "B"     // false (lexical comparison)
   "a" > "A"     // true (lowercase is greater)
   ```

4. **Undefined**  
   A variable that has been declared but not yet assigned a value.

   Example:
   ```javascript
   var x;
   console.log(x);    // undefined
   ```

5. **Null**  
   Represents an intentional absence of any value.

6. **Symbol** (introduced in ECMAScript 6)  
   A unique and immutable primitive value often used as the key for object properties.

7. **Object**  
   A collection of key-value pairs, where keys are strings or symbols, and values can be of any type.

   Example:
   ```javascript
   var user = {
     name: "John",
     age: 24,
     hobby: "soccer"
   };
   ```

---
### JavaScript Data Types:

|Data Type|Example|Description|
|---|---|---|
|**String**|`"Hello"`|Sequence of characters|
|**Number**|`10`, `3.14`|Numeric values|
|**Boolean**|`true`, `false`|Logical value (true or false)|
|**Array**|`[1, 2, 3]`|Ordered collection of values|
|**Object**|`{name: "John", age: 30}`|Collection of key-value pairs|
|**Null**|`null`|Represents an empty or non-existent value|
|**Undefined**|`undefined`|Represents an uninitialized variable|

---

## **5. Functions**

### Function Declaration:
#### Example 1:
```javascript
function add(a, b) {
    return a + b;
}

console.log(add(5, 3));  // Outputs: 8
```
#### Example 2:
  ```javascript
  function greet() {
    console.log("Hello, world!");
  }
  greet();  // Call the function
  ```

- **Function**: A block of code designed to perform a task or calculate a value.
- **Return**: Returns a value from a function.
- **Parameters**: Variables passed into a function for processing.

### Function Expression:
  ```javascript
  var greet = function() {
    console.log("Hello, world!");
  };
  greet();
  ```

### Arrow Functions (ES6+):
```javascript
const multiply = (a, b) => a * b;

console.log(multiply(4, 2));  // Outputs: 8
```

- **Arrow Function**: A shorter syntax for writing functions.

---

## **6. Conditional Statements**

- ### if statement: `if`
  Example:
  ```javascript
  if (age >= 18) {
    console.log("You are an adult.");
  }
  ```

- #### Else Statement: `else`
  Example:
  ```javascript
  if (age >= 18) {
    console.log("You are an adult.");
  } else {
    console.log("You are a minor.");
  }
  ```

- #### Else-if Statement: `else if`
  Example:
  ```javascript
  if (age > 60) {
    console.log("Senior citizen");
  } else if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }
  ```

- #### **Ternary Operator**: 
- A compact alternative to `if-else`.
  ```javascript
  let message = (age >= 18) ? "Adult" : "Minor";
  ```

- #### **Switch**  
  Example:
  ```javascript
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    default:
      console.log("Unknown day");
  }
  ```

---
## **7. Loops**

### **For Loop**:

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

- **For Loop**: Repeats a block of code a specified number of times.

### **ForEach Loop**:

#### **What is `forEach`?**

`forEach` is a **method** available for **arrays** in JavaScript. It allows you to loop through every item in the array and do something with each item (like print it to the console, change it, or anything else).

#### Basic Syntax:

```javascript
array.forEach(function(item) {
    // code to run for each item in the array
});
```

- **`array`**: This is the array you want to loop through.
- **`function(item)`**: This is the function that will be run for each element in the array.
    - `item` is the current element of the array in that loop.

#### Simple Example:

Let's say you have an array of fruits:

```javascript
let fruits = ["apple", "banana", "cherry"];
```

Now, you want to print each fruit to the console. Here’s how you do that with `forEach`:

```javascript
fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

#### **How It Works**:

8. **`fruits.forEach`**: This tells JavaScript to loop over the `fruits` array.
9. **`function(fruit)`**: For each element in the array, this function will run. It takes the current element as a parameter (which we call `fruit` here).
10. **`console.log(fruit)`**: For every fruit in the array, it prints that fruit to the console.

#### Output:

```
apple
banana
cherry
```

Each fruit is printed on a new line.

---

#### **Concise `forEach` with Arrow Function (One-liner)**:

You can also write the `forEach` loop in a concise way using **arrow functions**.

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num * 2));  // Multiply each number by 2
```

### Key Points About `forEach`:

- **No Index**: You don't need to manage the index (e.g., `i` in the `for` loop). The `forEach` method automatically takes care of that.
- **Cannot Break**: One limitation of `forEach` is that you cannot break out of it (i.e., stop the loop early), unlike the `for` loop where you can use `break` to exit.

---

#### Example with a Simple Explanation:

Let’s take this example:

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number * 2);  // Multiply each number by 2
});
```

- The array `numbers` contains `[1, 2, 3, 4, 5]`.
- The function `function(number)` gets each element in the array one by one. So, `number` will be `1`, then `2`, then `3`, etc.
- `console.log(number * 2)` prints the number multiplied by 2.

#### Output:

```
2
4
6
8
10
```

---

#### **Using `if` with `forEach` on One Line:**

You can also combine `if` statements with `forEach` in a concise one-liner using the `&&` operator. Here's an example where we print only the even numbers:

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => num % 2 === 0 && console.log(num));
```

In this case, the `console.log(num)` will only run for numbers that are even (i.e., when `num % 2 === 0` is true).

#### Output:

```
2
4
```

---

#### **Using `if/else` with `forEach` on One Line:**

If you want both `if` and `else` conditions in one line, you can use the **ternary operator**.

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => num % 2 === 0 ? console.log(num + " is even") : console.log(num + " is odd"));
```

This will check if each number is even or odd and print the result accordingly.

#### Output:

```
1 is odd
2 is even
3 is odd
4 is even
5 is odd
```

---

#### Key Differences Between `for` and `forEach`:

- **`for` Loop**:
    - It gives you more control over the iteration process (e.g., you can modify the index or break the loop early).
    - You can loop through any iterable (arrays, strings, etc.) and even use complex conditions.
- **`forEach`**:
    - It's more concise and expressive when you just want to iterate over the entire array.
    - You cannot use `break` or `continue` inside a `forEach` loop to stop or skip iterations (it will always go through every element).

---

### **While Loop**:

```javascript
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```

- **While Loop**: Repeats as long as the condition is `true`.

---

## **8. Arrays**

### Array Definition:

```javascript
let fruits = ["apple", "banana", "cherry"];
```

- **Array**: A collection of items (strings, numbers, etc.) stored in a single variable.
### JavaScript Array Methods

#### Commonly Used Array Methods
| Method      | Description                                                                       |
| ----------- | --------------------------------------------------------------------------------- |
| `push()`    | Adds new elements to the end of an array.                                         |
| `pop()`     | Removes the last element of an array, and returns that element.                   |
| `shift()`   | Removes the first element of an array, and returns that element.                  |
| `unshift()` | Adds new elements to the beginning of an array.                                   |
| `concat()`  | Joins two or more arrays, and returns a copy of the joined arrays.                |
| `slice()`   | Selects a part of an array, and returns the new array.                            |
| `splice()`  | Adds/Removes elements from an array.                                              |
| `indexOf()` | Search the array for an element and returns its position.                         |
| `forEach()` | Calls a function for each array element.                                          |
| `map()`     | Creates a new array with the result of calling a function for each array element. |
#### Complete List of Array Methods

| Method          | Description                                                                 |
| --------------- | --------------------------------------------------------------------------- |
| `concat()`      | Joins two or more arrays, and returns a copy of the joined arrays.          |
| `copyWithin()`  | Copies array elements within the array, to and from specified positions.    |
| `entries()`     | Returns a key/value pair Array Iteration Object.                            |
| `every()`       | Checks if every element in an array passes a test.                          |
| `fill()`        | Fills the elements in an array with a static value.                         |
| `filter()`      | Creates a new array with every element that passes a test.                  |
| `find()`        | Returns the value of the first element that passes a test.                  |
| `findIndex()`   | Returns the index of the first element that passes a test.                  |
| `forEach()`     | Calls a function for each array element.                                    |
| `from()`        | Creates an array from an object.                                            |
| `includes()`    | Check if an array contains the specified element.                           |
| `indexOf()`     | Search the array for an element and returns its position.                   |
| `isArray()`     | Checks whether an object is an array.                                       |
| `join()`        | Joins all elements into a string, and returns the result.                   |
| `keys()`        | Returns a Array Iteration Object, containing the keys.                      |
| `lastIndexOf()` | Searches the array for an element, starting at the end.                     |
| `map()`         | Creates a new array with the result of calling a function for each element. |
| `pop()`         | Removes the last element and returns that element.                          |
| `push()`        | Adds new elements to the end of an array.                                   |
| `reduce()`      | Reduce the values to a single value (going left-to-right).                  |
| `reduceRight()` | Reduce the values to a single value (going right-to-left).                  |
| `reverse()`     | Reverses the order of the elements in an array.                             |
| `shift()`       | Removes the first element and returns that element.                         |
| `slice()`       | Selects a part of an array and returns the new array.                       |
| `some()`        | Checks if any of the elements pass a test.                                  |
| `sort()`        | Sorts the elements of an array.                                             |
| `splice()`      | Adds/Removes elements from an array.                                        |
| `toString()`    | Converts an array to a string, and returns the result.                      |
| `unshift()`     | Adds new elements to the beginning of an array.                             |
| `valueOf()`     | Returns the primitive value of an array.                                    |
#### Example
```javascript
fruits.push("orange");  // Adds "orange" to the end
fruits.pop();           // Removes the last item
fruits.shift();         // Removes the first item
fruits.unshift("kiwi"); // Adds "kiwi" to the start
```

---

## **9. Objects**

### Object Definition:

```javascript
let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello " + this.name);
    }
};

person.greet();  // Outputs: Hello John
```

- **Object**: A collection of key-value pairs. Keys are strings (properties), and values can be any data type (e.g., strings, numbers, functions).

---

## **10. Events and DOM Manipulation**

### Event Listener:

```javascript
let button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Button clicked!");
});
```

- **Event Listener**: A function that runs in response to an event (e.g., a button click).

### Changing Content:

```javascript
document.getElementById("myDiv").innerHTML = "Hello, World!";
```

- **DOM Manipulation**: Modifying the content or style of HTML elements through JavaScript.

### JavaScript Popup Boxes

JavaScript provides three types of popup boxes:

- **`alert()`**: Displays an alert box with a message.
  ```javascript
  alert("This is an alert!");
  ```

- **`prompt()`**: Displays a dialog box that prompts the user for input.
  ```javascript
  let name = prompt("What is your name?");
  ```

### DRY Principle
- **Do Not Repeat Yourself (DRY)**: Avoid repetitive code by using functions, loops, or variables where possible to make your code more efficient and maintainable.

Example:
```javascript
function greetUser(name) {
  console.log("Hello, " + name + "!");
}
greetUser("John");
greetUser("Sarah");
```

## DOM Manipulation

When a web page is loaded, the browser creates a Document Object Model (DOM) of the page. The DOM represents the structure of the document as a tree of nodes, allowing developers to interact with and manipulate the elements, styles, and content of the web document.

### Basic Methods

- **`document.write()`**: 
  - Used to write a string of text to the document stream opened by `document.open()`. It can be useful for simple demonstrations but is generally not recommended for production code because it can overwrite the entire document if called after the document has fully loaded.
  ```javascript
  document.write("Hello, World!");
  ```

- **`window.alert()`**: 
  - Displays an alert dialog with a specified message and an OK button. This method can be useful for debugging or informing users but can disrupt the user experience if overused.
  ```javascript
  window.alert("This is an alert message!");
  ```

### DOM Selectors

DOM selectors are essential for accessing and manipulating HTML elements within the DOM. The following table lists common selectors and their descriptions:

| Selector                 | Description                                                                                         | Example Code                                  |
| ------------------------ | --------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `getElementsByTagName`   | Returns a live HTMLCollection of elements with the given tag name (e.g., `<div>`, `<p>`).           | `document.getElementsByTagName("p");`         |
| `getElementsByClassName` | Returns a live HTMLCollection of elements with the specified class name.                            | `document.getElementsByClassName("myClass");` |
| `getElementById`         | Returns the first element with the specified ID, which must be unique within the document.          | `document.getElementById("myId");`            |
| `querySelector`          | Returns the first element that matches a specified CSS selector (e.g., `.class`, `#id`, `element`). | `document.querySelector(".myClass");`         |
| `querySelectorAll`       | Returns a static NodeList of all elements that match a specified CSS selector.                      | `document.querySelectorAll("div.myClass");`   |

### Attribute Manipulation

Attributes provide additional information about elements. They can be accessed and manipulated as follows:

- **Getting Attributes**
  ```javascript
  // Get the value of an attribute
  const randomValue = document.querySelector("li").getAttribute("random");
  console.log(randomValue); // Outputs the value of the 'random' attribute
  ```

- **Setting Attributes**
  ```javascript
  // Set or update the value of an attribute
  document.querySelector("li").setAttribute("random", "1000");
  ```

### Changing Styles

You can manipulate the styles of elements directly or via classes. Using classes is generally preferred for better maintainability.

- **Direct Style Manipulation**
  ```javascript
  // Change inline style
  document.querySelector("h1").style.color = "blue"; // Changes the text color to blue
  document.querySelector("h1").style.fontSize = "24px"; // Changes the font size to 24px
  ```

- **Class Manipulation (Recommended)**
  - **`className`**: Get or set the class of an element.
  - **`classList`**: Provides methods to manipulate classes.
    - **Methods**:
      - `classList.add(className)`: Adds the specified class.
      - `classList.remove(className)`: Removes the specified class.
      - `classList.toggle(className)`: Toggles the specified class (adds it if it’s absent, removes it if it’s present).
      - `classList.contains(className)`: Checks if the element has a specific class.

  ```javascript
  // Example of class manipulation
  document.querySelector("li").classList.toggle("highlight"); // Toggles 'highlight' class on the first <li>
  ```

### Content Manipulation

You can manipulate the content of elements in several ways:

- **`innerHTML`**: 
  - Gets or sets the HTML content inside an element. While useful, be cautious as it can expose your application to XSS (Cross-Site Scripting) attacks if used improperly.
  ```javascript
  document.querySelector("div").innerHTML = "<p>New content here!</p>";
  ```

- **Navigating the DOM**:
  - **`parentElement`**: Accesses the parent element of the selected element.
  - **`children`**: Returns a live HTMLCollection of child elements of the selected element.

  ```javascript
  // Example of navigating the DOM
  const parent = document.querySelector("li").parentElement; // Gets the parent of the first <li>
  const children = document.querySelector("ul").children; // Gets all children of the first <ul>
  ```

> **Note**: It’s important to **cache** selectors in variables to optimize performance. This reduces the number of times the DOM needs to be queried.

```javascript
var h1 = document.querySelector("h1");
// Now h1 can be reused without re-querying the DOM.
h1.style.color = "red"; // Changes the color of the cached h1 element.
```

### Events

Events allow you to create interactive web pages by responding to user actions.

- **Common Event Types**:
  - `click`: Triggered when the user clicks on an element.
  - `mouseenter`: Triggered when the mouse pointer enters the element.
  - `mouseleave`: Triggered when the mouse pointer leaves the element.

- **Adding Event Listeners**:
  Use `addEventListener` to listen for specific events and define the associated actions.

```javascript
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {
  if (input.value > 0) {
    console.log(input.value);
    var li = document.createElement("li"); // Create a new <li> element
    li.appendChild(document.createTextNode(input.value)); // Create and append text node to <li>
    ul.appendChild(li); // Append <li> to <ul>
    input.value = ""; // Clear the input field
  }
});
```

---

## **11. Asynchronous JavaScript**

### **setTimeout()**:

```javascript
setTimeout(function() {
    console.log("This message appears after 2 seconds.");
}, 2000);
```

- **setTimeout()**: Executes a function after a specified time delay (in milliseconds).

### **Promises**:

```javascript
let promise = new Promise(function(resolve, reject) {
    let success = true;
    if (success) {
        resolve("Task completed");
    } else {
        reject("Task failed");
    }
});

promise.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
});
```

- **Promises**: Used to handle asynchronous operations, allowing for better error handling and chaining of operations.

---

## **12. Outputting Results Using Logical OR (`||`)**

### **Shortened Method for FizzBuzz Example**:

```javascript
for (let i = 1; i <= 50; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
}
```

- **Explanation of `output || i`**:
    - The expression `output || i` is a **logical OR** operation. It checks if `output` is a non-empty string.
    - **If `output` is not empty** (meaning `i` is divisible by 3 or 5), it will print the value of `output` (which will be either `"Fizz"`, `"Buzz"`, or `"FizzBuzz"`).
    - **If `output` is empty** (meaning `i` is neither divisible by 3 nor 5), it will print the value of `i` instead.
    - This allows you to combine checking conditions and outputting values more efficiently in one line. The logical OR (`||`) ensures that `i` is used as a fallback when `output` is empty.

---

### Why This is Useful:

- **Concise Code**: Instead of having multiple `if-else` statements to handle the different cases, you can create the result string (`output`) and use it directly. This reduces the need for complex branching logic.
- **Fallback Value**: The `||` operator provides a quick way to default to `i` if there’s no "Fizz" or "Buzz" for that number.

---
---
## **Key Concepts Covered**

- **JavaScript**: A programming language that adds interactivity and functionality to webpages.
- **Variables & Data Types**: Declaring variables and understanding data types (strings, numbers, objects, etc.).
- **Functions**: Defining and calling functions to organize code.
- **Conditionals & Loops**: Making decisions in code and repeating actions with loops.
- **Arrays & Objects**: Working with collections of data.
- **DOM Manipulation**: Interacting with the HTML structure to modify content dynamically.
- **Events**: Handling user interactions with JavaScript.
- **Asynchronous JavaScript**: Working with time-based functions and promises for async behavior.

---
### Programming Paradigms

Understanding programming paradigms is crucial for developing effective coding practices.

- **Declarative Programming**: A programming paradigm that expresses the logic of a computation without describing its control flow. Examples include HTML, SQL, and functional programming. It focuses on what the program should accomplish rather than how it should achieve it.

- **Imperative Programming**: A paradigm that uses statements that change a program’s state. It includes languages like JavaScript, Python, and Java. This approach emphasizes the steps to perform a task and allows for more direct control of the program flow.

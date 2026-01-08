/******************************************************
 * JavaScript Functions & Array Methods
 * Author: Asif Ali
 * Description:
 * This file demonstrates:
 * 1. Function declaration & definition
 * 2. Difference between function and method
 * 3. Built-in array methods
 *    - push, pop, shift, unshift
 *    - slice, splice
 * 4. User-defined functions
 * 5. Arrow functions
 ******************************************************/

/* ====================================================
   1. Function Declaration & Definition
   ----------------------------------------------------
   Function Declaration:
   - Using the 'function' keyword
   - Can be called before its definition
==================================================== */

function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

console.log(greetUser("Asif"));

/* ====================================================
   2. Function vs Method
   ----------------------------------------------------
   Function:
   - Independent block of code
   - Not attached to any object

   Method:
   - A function that belongs to an object
==================================================== */

// Function example
function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(5, 10));

// Method example
let student = {
  name: "Asif",
  getName: function () {
    return this.name;
  }
};

console.log(student.getName());

/* ====================================================
   3. Array Methods
==================================================== */

let fruits = ["Apple", "Banana", "Mango"];

/* push()
   - Adds element at the end of array */
fruits.push("Orange");
console.log("After push:", fruits);

/* pop()
   - Removes last element from array */
fruits.pop();
console.log("After pop:", fruits);

/* unshift()
   - Adds element at the start of array */
fruits.unshift("Grapes");
console.log("After unshift:", fruits);

/* shift()
   - Removes first element from array */
fruits.shift();
console.log("After shift:", fruits);

/* slice()
   - Returns a new array
   - Does NOT change original array */
let slicedFruits = fruits.slice(0, 2);
console.log("Slice result:", slicedFruits);
console.log("Original array:", fruits);

/* splice()
   - Adds or removes elements
   - Changes original array */
fruits.splice(1, 1, "Pineapple");
console.log("After splice:", fruits);

/* ====================================================
   4. User-Defined Functions
   ----------------------------------------------------
   Functions created by the programmer
==================================================== */

function calculateSquare(number) {
  return number * number;
}

console.log("Square:", calculateSquare(4));

/* ====================================================
   5. Arrow Functions
   ----------------------------------------------------
   - Short syntax for functions
   - Introduced in ES6
==================================================== */

const multiply = (a, b) => {
  return a * b;
};

console.log("Multiply:", multiply(3, 5));

/* One-line arrow function */
const isEven = num => num % 2 === 0;
console.log("Is Even:", isEven(10));

/******************************************************
 * End of File
 ******************************************************/

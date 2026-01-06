// Loops in JavaScript
// Loops allow us to execute a block of code multiple times

// 1️⃣ For Loop
console.log("For Loop Example:");
for (let i = 1; i <= 5; i++) { // i starts from 1, ends at 5
    console.log("Iteration:", i);
}
console.log("--------------------");

// 2️⃣ While Loop
console.log("While Loop Example:");
let j = 1;
while (j <= 5) { // executes as long as condition is true
    console.log("Iteration:", j);
    j++;
}
console.log("--------------------");

// 3️⃣ Do-While Loop
console.log("Do-While Loop Example:");
let k = 1;
do {
    console.log("Iteration:", k);
    k++;
} while (k <= 5);
console.log("--------------------");

// 4️⃣ For...of Loop (array traversal)
console.log("For...of Loop Example:");
const fruits = ["Apple", "Banana", "Mango"];
for (const fruit of fruits) {
    console.log(fruit);
}
console.log("--------------------");

// 5️⃣ For...in Loop (object traversal)
console.log("For...in Loop Example:");
const person = { name: "Asif", age: 22, isStudent: true };
for (const key in person) {
    console.log(key + ":", person[key]);
}
console.log("--------------------");

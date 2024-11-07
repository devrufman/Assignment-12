
/* Question 1
Given an array of objects:
const products = [{id: 1, name: "Laptop"}, {id: 2, name: "Phone"}, {id: 3, name: "Tablet"}];
Write code to:
1. Find the product with the name "Phone" using the find() method.*/

const products = [{id: 1, name: "Laptop"}, {id: 2, name: "Phone"}, {id: 3, name: "Tablet"}];
const productPhone = products.find(product => product.name === "Phone");
console.log(productPhone); // {id: 2, name: "Phone"}

// 2. Get the index of the product with id equal to 3 using findIndex().

const indexWithId3 = products.findIndex(product => product.id === 3);
console.log(indexWithId3); // 2

/*Question 2
Write a function greet that takes a name parameter with a default value of "Friend".
The function should return a greeting message like, "Hello, [name]!"*/
function greet(name = "Friend") {
    return `Hello, ${name}`;
}
console.log(greet("John")); // "Hello, John!"
console.log(greet());       // "Hello, Friend!"

/*Question 3
Given the array:
const items = ["apple", "banana", "cherry"];
Use the map() function to return a new array where each item is capitalized.*/

const items = ["apple", "banana", "cherry"];
const capitalizedItems = items.map(item =>item.toUpperCase());
console.log(capitalizedItems); // ["APPLE", "BANANA", "CHERRY"]

/*Question 4
Create two arrays:
const arr1 = [1, 2, 3] and const arr2 = [4, 5, 6].
Use the spread operator to merge them into a single array and log the result.*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

/*Question 5
Define const name = "JavaScript".
Write a code snippet that uses template literals to generate the following message:
"The length of the word 'JavaScript' is 10 characters."*/

const name = "JavaScript";
const message = `The length of the word '${name}' is ${name.length} characters`
console.log(message); // "The length of the word 'JavaScript' is 10 characters."

/*Question 6
Define a string const message = "Welcome to JavaScript ES6!".
Write code to:
- Convert it to lowercase.
- Find the position of the word "JavaScript".
- Replace "JavaScript" with "ES6".*/

const messageText = "Welcome to JavaScript ES6!";
const lowerCaseMessage = messageText.toLowerCase();
const position = messageText.indexOf("JavaScript");
const replacedMessage = messageText.replace("JavaScript", "ES6");

console.log(lowerCaseMessage); // "welcome to javascript es6!"
console.log(position);         // 11
console.log(replacedMessage);  // "Welcome to ES6 ES6!"

/*Question 7
-Given an array of numbers*/
const ages = [21, 18, 45, 30];

// Check if all ages are greater than or equal to 18 using every()
const allAgesAbove18 = ages.every(age => age >= 18);
console.log(allAgesAbove18); // true

// Check if any age is below 20 using some()
const anyAgeBelow20 = ages.some(age => age < 20);
console.log(anyAgeBelow20); // true

/*Question 8
Create an array const scores = [10, 15, 20, 25].
Write a function using the reduce() method to calculate the total score.*/

const scores = [10, 15, 20, 25];
const totalScore = scores.reduce((total, score) => total + score, 0);
console.log(totalScore); // 70

/*Question 9
Create an array const numbers = [3, 6, 9, 12, 15, 18, 21].
Use an arrow function with the filter() method to create a new array with only numbers greater than 10.*/

const numbers = [3, 6, 9, 12, 15, 18, 21];
const filteredNumbers = numbers.filter(number => number > 10);
console.log(filteredNumbers); // [12, 15, 18, 21]

/*Question 10
Define a string const message = "Welcome to JavaScript ES6!".
Write code to:
- Convert it to lowercase.
- Find the position of the word "JavaScript".
- Replace "JavaScript" with "ES6".
*/


// JavaScript comes with built in sort method
// Sort method accepts optional COMPARATOR function which tells JavaScript how we want elements sorted
// Comparator looks at pair of numbers (a and b) and determines their sort order based on the return value
// -If it returns a negative number, A should come before B
// -Positive number means B before A
// -If it returns 0, A and B are the same as far as the comparator is concerned

let numbers = [6, 4, 15, 10];

function numbersCompare(num1, num2) {
	return num1 - num2;
}
function compareNumbers(num1, num2) {
	return num2 - num1;
}

// console.log(numbers.sort(numbersCompare)); // [4,6,10,15]
// console.log(numbers.sort(compareNumbers)); // [15,10,6,4]

// console.log(numbers.sort((num1, num2) => num1 - num2)); // [4,6,10,15]  ES6 syntax with arrow function
// console.log(numbers.sort((num1, num2) => num2 - num1)); // [15,10,6,4]

let myStrings = ['Bojan J', 'Algorithm Practice', 'Short', 'And how are you?'];

console.log(myStrings.sort((str1, str2) => str1.length - str2.length)); // Shortest to longest

// Consider integer numbers from 0 to n-1 written down along the circle in such a way that the distance between any two neighbouring nubmers is equal (note that 0 and n-1 are neighbouring, too)

// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

// Example: For n=10 and firstNumber = 2, the output should be circleOfNumbers(n,firstNumber) = 7

// 0 1 2 3
// 9     4
// 8 7 6 5

function circleOfNumbers(n, firstNum) {
	return (n / 2 + firstNum) % n;
}

// console.log(circleOfNumbers(10, 2)); // 7
// console.log(circleOfNumbers(10, 5)); // 0
// console.log(circleOfNumbers(10, 9)); // 4

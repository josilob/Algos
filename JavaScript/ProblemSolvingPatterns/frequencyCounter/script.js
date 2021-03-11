// Write a function called sameFrequency that takes in two arrays and returns true if every value in the array one has it's corresponding value squared in the second array. The frequency of values must be the same.

function sameFrequency(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	// first iteration - for loop
	for (let i = 0; i < arr1.length; i++) {
		// 2nd iteration over elements (indexOf has O(n) time complexity)
		let correctIndex = arr2.indexOf(arr1[i] ** 2);
		if (correctIndex === -1) {
			return false;
		}
		arr2.splice(correctIndex, 1);
	}
	return true;
}
// console.log(sameFrequency([1, 2, 3, 3, 2, 6], [1, 4, 36, 9, 9, 4]));

//
// FREQUENCY COUNTER PATTERN
function sameFrequency2(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};
	// two sequenced loops, but not nested make it O(n)
	for (let val of arr1) {
		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
	}
	for (let val of arr2) {
		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
	}
	for (let key in frequencyCounter1) {
		// in operator returns true/false if it finds specified key in the object
		if (!(key ** 2 in frequencyCounter2)) {
			return false;
		}
		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
			return false;
		}
	}
	return true;
}
// console.log(sameFrequency2([1, 2, 3, 3, 2, 6], [1, 4, 36, 9, 9, 4]));

// Write another function called sameFrequency with two positive integers.
// Find out if the two numbers have the same frequency of digits
// Solution must have complexity of: O(N)
function sameFrequency3(num1, num2) {
	if (!num1 || !num2) return false;
	if (num1 < 1 || num2 < 1) return false;
	let num1Hash = {};
	let num2Hash = {};

	for (let val of num1.toString()) {
		num1Hash[val] = (num1Hash[val] || 0) + 1;
	}
	for (let val of num2.toString()) {
		num2Hash[val] = (num2Hash[val] || 0) + 1;
	}

	for (let key in num1Hash) {
		// if the same key doesn't exist in other hash map, return false
		if (!(key in num2Hash)) return false;
		// if the values of those keys are not the same, return false
		if (num1Hash[key] !== num2Hash[key]) return false;
	}
	return true;
}
// console.log(sameFrequency3(1614, 4161));

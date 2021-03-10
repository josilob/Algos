// Write a function called sameFrequency that takes in two arrays and returns true if every value in the array one has it's corresponding value squared in the second array. The frequency of values must be the same.

function sameFrequency(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let i = 0; i < arr1.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2); // 2nd iteration over elements (indexOf has O(n) time complexity)
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
console.log(sameFrequency2([1, 2, 3, 3, 2, 6], [1, 4, 36, 9, 9, 4]));

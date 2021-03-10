// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if pair doesn't exist.

// N^2 solution:
function sumZero(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) {
				return [arr[i], arr[j]];
			}
		}
	}
}

// console.log(sumZero([-3, -2, 1, 5, 7, 8, 3, 2]));

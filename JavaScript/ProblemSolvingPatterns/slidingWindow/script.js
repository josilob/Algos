// This pattern involves creating a window which can either be an array or number from one position to another.
// Depending on a certain condition the window either increases or closes (and a new window is created)
// Very useful pattern for keeping subset data in array/string, etc.

// Example:
// Write a function called maxSubarraySum that takes in array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// nested loop approach
function maxSubarraySum(arr, n) {
	if (n > arr.length) return null;
	let max = -Infinity;
	for (let i = 0; i < arr.length - n + 1; i++) {
		temp = 0;
		for (let j = 0; j < n; j++) {
			temp += arr[i + j];
		}
		if (temp > max) max = temp;
	}
	return max;
}

// console.log(
// 	maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)
// 	maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)
// 	maxSubarraySum([4, 2, 1, 6], 1),
// 	maxSubarraySum([4, 2, 1, 6, 2], 4),
// 	maxSubarraySum([], 4)
// );

//Refactor, SLIDING WINDOW
function maxSubarraySum2(arr, n) {
	let maxSum = 0;
	let tempSum = 0;
	if (arr.length < n) return null;
	// create a sum of first 3 numbers
	for (let i = 0; i < n; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;
	// start a loop which will be deducting value of starting element and add value of next element in the array
	// this way we 'slide' through the array creating the sum of N given elements
	// if the tempSum variable becomes greater than maxSum, store it's value in maxSum
	for (let i = n; i < arr.length; i++) {
		tempSum = tempSum - arr[i - n] + arr[i];
		maxSum = Math.max(tempSum, maxSum);
	}
	return maxSum;
}

console.log(
	maxSubarraySum2(
		[1, 2, 3, 4, 5, 6, 7, 2, 2, 2, 3, 4, 5, 6, 11, 1, 1, 1, 2, 3, 4, 2, 9, 8, 7],
		10
	)
);

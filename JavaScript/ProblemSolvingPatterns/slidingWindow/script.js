// This pattern involves creating a window which can either be an array or number from one position to another.
// Depending on a certain condition the window either increases or closes (and a new window is created)
// Very useful pattern for keeping subset data in array/string, etc.

// Example:
// Write a function called maxSubarraySum that takes in array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, n) {}

console.log(
	maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2),
	maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4),
	maxSubarraySum([4, 2, 1, 6], 1),
	maxSubarraySum([4, 2, 1, 6, 2], 4),
	maxSubarraySum([], 4)
);

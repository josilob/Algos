// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example
// arr = [1,3,5,7,9]

// The minimum sum is 1+3+5+7=16 and the maximum sum is 3+5+7+9=24 .
// The function prints 16 24

function miniMaxSum(arr) {
	arr = arr.sort();
	const minFour = arr.slice(0, 4).reduce((sum, el) => sum + el, 0);
	const maxFour = arr.slice(-4, arr.length).reduce((sum, el) => sum + el, 0);
	return [minFour, maxFour];
}
console.log(miniMaxSum([1, 2, 3, 4, 5, 6, 7, 8]));

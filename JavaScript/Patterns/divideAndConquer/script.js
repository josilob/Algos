// This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
// This pattern can tremendously decrease time complexity.

// Example: Given a SORTED array of integers, write a function called search, that accepts value and returns the index where the value passed to the function is located. If the value is not found, return -1. (just like indexOf method for the arrays)

// regular approach - O(n)
function search(arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			return i;
		}
	}
	return -1;
}

// DIVIDE AND CONQUER - binary search - log(n)
// Each time we loop, we cut the array in half
function search2(arr, val) {
	let min = 0;
	let max = arr.length - 1;

	while (min <= max) {
		let middle = Math.floor((min + max) / 2);
		let currentElement = arr[middle];

		// if middle element is smaller than the given value, set element right of it as a MIN
		if (arr[middle] < val) {
			min = middle + 1;
		}
		// if middle element is greater than the given value, set element left of it as a MAX
		else if (arr[middle] > val) {
			max = middle - 1;
		} else {
			return middle;
		}
	}
	return -1;
}

console.log(
	search2(
		[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		14
	)
);

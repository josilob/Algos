// Searching algorithms
// -------------
// LINEAR SEARCH
// -------------
// The simplest way to search for a value is to look at each element in the array and compare it to the given value.
// Javascript has many different searching methods on arrays in JavaScript: indexOf, includes, find, findIndex

// accept array and a number
// loop through the array and check if the current array element is equal to the value
// if it is, return it's index at which the element is found
// if the value is not found, return -1
const linearSearch = (arr, num) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === num) return i;
	}
	return -1;
};

// console.log(linearSearch([1, 2, 3, 4, 5, 6], 5));

// Linear search time complexity:
// Best case O(1) - element we are searching for is the first one in the array
// Worst case O(N) - element is at the end of the array we are traversing

// -------------
// BINARY SEARCH
// -------------
// Works only on SORTED ARRAYS, but with each iterations it eliminates HALF of the REMAINING elements
// Much faster than the linear search
// Also known as Divide and Conquer

// Accept SORTED array and a value
// Create left pointer at the start of the array and the right pointer at it's end
// While the left pointer comes before right pointer:
//  -create a pointer in the middle
//  -if you find the value you want, return the index
//  -if the value is too small, move the left pointer up
//  -if the value is too large, move the right pointer down
// If the value is never found, return -1

const binarySearch = (arr, val) => {
	let left = 0;
	let right = arr.length - 1;
	let pointer = Math.floor((left + right) / 2);

	while (arr[pointer] !== val && left < right) {
		if (val < arr[pointer]) right = pointer - 1;
		else left = pointer + 1;
		pointer = Math.floor((left + right) / 2);
	}
	return arr[pointer] === val ? pointer : -1;
};

// console.log(binarySearch([1, 2, 3, 4, 5], 4));

// Worst case: O(logN)
// Best case: O(1)

// -------------
// STRING SEARCH
// -------------
//
// loop over the longer string
// loop over the shorter string
// if the characters do not match, break out of the inner loop
// if the characters do match, keep going
// if the inner loop is completed and match is found, increment the count of matches
// return the count

function stringSearch(long, short) {
	let count = 0;
	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < short.length; j++) {
			if (short[j] !== long[i + j]) break;
			if (j === short.length - 1) count++;
		}
	}
	return count;
}

// console.log(stringSearch('tralallaalal', 'lal')); //2 matches

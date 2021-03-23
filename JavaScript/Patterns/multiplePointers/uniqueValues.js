// Implement a function called uniqueValues which accepts a sorted array and counts unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

function uniqueValues(arr) {
	if (arr.length === 0) return 0;
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
}
// console.log(uniqueValues([1, 2, 3, 4, 5, 6, 6, 6, 6, 7, 8, 9, 9, 10]));

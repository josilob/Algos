// SELECTION SORT
// similar to bubble sort except instead of sorting large values first, it places small ones.
// with each iteration we place next minimum value.

// Pseudocode:
// Store the first element as the smallest value stored so far
// Compare this item to the next one in the array until the smaller value is found
// If a smaller number is found, designate that smaller number to be the new 'minimum' and continue until the end of the array.
// If the minimum is not the value(index) you initially begin with, swap the two values.
// Repeat with the next element until array is sorted.

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		// to prevent empty loop without elements swapping (e.g. if they are already in proper positions)
		if (i !== lowest) {
			console.log('swapping', i, lowest);
			[arr[i], arr[lowest]] = [arr[lowest], arr[i]];
		}
	}
	return arr;
}

selectionSort([33, 22, 10, 17, 15]);

// INSERTION SORT
// Builds up the sort by gruadually creating a larger left half which is always sorted.

// Pseudocode:
// - Start by picking the second element in the array
// - Compare the second element with the one before it and swap if necessary
// - Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
// - Repeat until the array is sorted

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		let index = i;
		for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
			index = j;
		}
		arr[index] = currentVal;
	}
	return arr;
}
// Another way
function insertionSort2(arr) {
	for (let i = 1; i < arr.length; i++) {
		let curVal = arr[i];
		let j = i - 1;
		while (arr[j] > curVal && j >= 0) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = curVal;
	}
	return arr;
}
// Without additional variable, relyong on 'var' so its scoped out of inner loop
function insertionSort3(arr) {
	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		// Defining j as 'var' it becomes accessible outside of inner loop so it can be used
		for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		// j will not be returning as undefined here and throwing an error
		arr[j + 1] = currentVal;
	}
	return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
console.log(insertionSort2([2, 1, 9, 76, 4]));
console.log(insertionSort3([2, 1, 9, 76, 4]));

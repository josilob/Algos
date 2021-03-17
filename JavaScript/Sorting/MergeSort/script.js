// MERGE SORT - Divide and Conquer
// Keep splitting unsorted array until they are all size of 1 element.
// Repeatedly merge them back together while producing new sorted sublist until there is only one array.

// Pseudocode:
// 1) Create an empty array and take a look at the smallest values in each input array.
// 2) While there are still values we haven't looked at:
//   a)if the value in the first array is smaller than the value in the second array, push the value from the first array into results array and move on to the next value in the first array.
//   b)if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array.
//   c)Once one of the arrays is exhausted entirely, push in all the remaining values from the other array

function merge(arr1, arr2) {
	let results = [],
		i = 0,
		j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}
	// after merging sorted arrays, if there are any values left in one of the arrays, simply push them into the results
	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}
	return results;
}

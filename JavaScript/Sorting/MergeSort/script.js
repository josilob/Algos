// MERGE SORT - Divide and Conquer
// Keep splitting unsorted array until they are all size of 1 element.
// Repeatedly merge them back together while producing new sorted sublist until there is only one array.

// Merging Sorted Arrays Pseudocode:
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

// shorter syntax:
function merge2(arr1, arr2) {
	let i = 0,
		j = 0,
		results = [];
	while (i < arr1.length && j < arr2.length) {
		arr1[i] < arr2[j]
			? (results.push(arr1[i]), ++i)
			: (results.push(arr2[j]), ++j);
	}
	i === arr1.length && j < arr2.length
		? results.push(...arr2.slice(j))
		: results.push(...arr1.slice(i));
	return results;
}

// Merge Sort Pseudocode:
// 1) Break up array into halves until you have arrays that are empty or have one element
// 2) Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// 3) Once the array has been merged back together, return the merged (and sorted!) array

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let midpoint = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

// QUICK SORT
// Like Merge Sort, exploits the fact that arrays of 0 or 1 elements are always sorted
// Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array.
// Once the Pivot is positioned appropriately, quick sort can be applied on either side of the pivot

//Example: Looking at the array:
// [5, 2, 1, 8, 4, 7, 6, 3]

// Say, we pick first element: 5
// We have 4 numbers less than 5, meaning 5 will be with idx of 4 in the array and that is now it's correct spot. Proceed with the rest of items.

// PIVOT HELPER In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
// Given an array, this helper function should designate an element as the pivot
// It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
// The order of elements on either side of the pivot doesn't matter
// The helper should do this IN PLACE, that is, should not create a new array
// When complete, the helper should return the index of the pivot

// PICKING A PIVOT:
// The runtime of quick sort depends in part on how one selects the pivot
// Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
// For simplicity, we can always choose the pivot to be the first element (more about consequences later)

//PIVOT PSEUDOCODE:
// Accept three arguments: an array, starting idx and an end idx(these can default to 0 and the array length minus 1, respectively)
// Grab the pivot from the start of the array
// Store the current pivot idx in a variable (this will keep track of where the pivot should end up)
// Loop through the array from the start until the end
//    - If the pivot is greater than the current element, increment the pivot idx variable and the n swap the current element with the element at the pivot idx
// Swap the starting element (i.e. the pivot) with the pivot idx
// Return the pivot idx

function pivot(arr, start = 0, end = arr.length + 1) {
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};
	// assume the pivot is always the first element
	let pivot = arr[start];
	let swapIdx = start;

	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}
	swap(arr, start, swapIdx);
	return swapIdx;
}

// QUICKSORT PSEUDOCODE:
// Call the pivot helper on the array
// When the helper returns the updated pivot idx, recursively call the pivot helper on the subarray to the left of that idx, and the subarray to the right of that idx

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);
		// left
		quickSort(arr, left, pivotIndex - 1);
		// right
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

// console.log(quickSort([1, 6, 2, 3, 7, 4, 9]));

// BigO of QuickSort

// Time Complexity:
//    -Best Case: O(NlogN) - if the pivot is the middle element
//    -Average: O(NlogN)
//    -Worst: O(n^2) - if the pivot is the first element in sorted array

// Space Complexity: O(logN)

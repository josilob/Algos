// BUBBLE SORT
// As we loop through items in array, we compare them to the next one in line and swap their places if needed, or keep them as is if they match the pattern

// Many sorting algorithms make some type of swapping functionality(eg. swap the numbers to put them in order)
// Old syntax say:
function swap(arr, idx1, idx2) {
	let temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
}

//ES2015 Way, single line
const swapES5 = (arr, idx1, idx2) => {
	[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// BUBBLE SORT PSEUDOCODE:
// - Start looping with a variable called i from the end of the array towards the beginning
// - Start an inner loop with a variable called j from the beginning until i-1
// - If arr[j] is greater than arr[j-1], swap those two values!
// - Return the sorted array

function bubbleSort(arr) {
	// optimized version with noSwap variable; if no swaps took place, there's no need to continue looping
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap their values
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
}

console.log(bubbleSort([36, 45, 29, 8]));

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of pair equals the targeted average. There may be more than one pair that averages the target value.

// Time: O(N), Space O(1)

function averagePair(arr, num) {
	let start = 0;
	let end = arr.length - 1;
	while (start < end) {
		let avg = (arr[start] + arr[end]) / 2;
		if (avg === num) return true;
		else if (avg < num) start++;
		else end--;
	}
	return false;
}

console.log(averagePair([2, 4, 5, 7, 9], 5)); // false
console.log(averagePair([1, 4, 9], 5)); // true (9+1)/2

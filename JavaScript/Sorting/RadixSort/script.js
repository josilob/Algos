// RADIX SORT
// special sorting algorithm that works on list of numbers
// It never makes comparisons between elements but it exploits the fact that
// information about the size of a number is encoded in the number of digits. More digits means bigger number.
// We sort numbers in buckets based on this, as many times as the largest number has digits.

// To implement the radix sort, it's helpful to start with a few helper functions first:

// getDigit(num,place) - returns the digit in num at the given place value
// getDigit(12345,0) //=>5
// getDigit(12345,4) //=>1
// getDigit(7323,1) //=>2
// getDigit(7323,2) //=>3

function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// digitCount(num) // returns the number of digits in num
// digitCount(25); =>2 // digitCount(314); =>3
function digitCount(num) {
	if (num === 0) return 1;
	// 10 to what power gives us the number (log at base of 10)
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// Math.log10(423) => 2.6263...
// Math.abs(2.6263) => 2 ... 2+1 = 3

// mostDigits([1234,56,7]) // => 4
function mostDigits(nums) {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
}

// PSEUDOCODE:
// Define a function that accepts list of numbers
// Figure out how many digits the largest number has
// Loop from k=0 up to this largest number of digits
// For each iteration of the loop:
//  -Create buckets for each digit(0-9)
//  -Place each number in the corresponding bucket based on its k-th digit
// Replace our existing array with values in our buckets, starting with 0 and going up to 9
// Return list at the end.

function radixSort(nums) {
	let maxDigitsCount = mostDigits(nums);
	for (let k = 0; k < maxDigitsCount; k++) {
		// create 10 emtpty arrays (buckets)
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let i = 0; i < nums.length; i++) {
			let digit = getDigit(nums[i], k);
			digitBuckets[digit].push(nums[i]);
		}
		// console.log(digitBuckets);
		nums = [].concat(...digitBuckets);
	}
	return nums;
}

console.log(radixSort([23, 345, 5467, 2345, 9852]));

// Radix Sort BigO (n-length of array, k-number of digits(average))
// Time Complexity: best, average and worst => O(nk)
// Space Complexity: O(n+k)

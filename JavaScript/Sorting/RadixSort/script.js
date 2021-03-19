// RADIX SORT
// special sorting algorithm that works on list of numbers
// It never makes comparisons between elements but it exploits the fact that information about the size of a number is encoded in the number of digits.
// More digits means bigger number. And we sort numbers in buckets based on this, as many times as the largest number has digits.

// To implement the radix sort, it's helpful to start with a few helper functions first:

// getDigit(num,place) - returns the digit in num at the given place value
// getDigit(12345,0) //=>5
// getDigit(12345,4) //=>1
// getDigit(7323,0) //=>3
// getDigit(7323,2) //=>3
// getDigit(7323,1) //=>2
// getDigit(7323,3) //=>7

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

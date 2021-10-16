// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
	for (var i in numbers) {
		if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
			return numbers[i];
		}
	}
}

//bitwise
const stray2 = (nums) => nums.reduce((a, b) => a ^ b);

function stray3(nums) {
	let max = Math.max(...nums);
	let min = Math.min(...nums);
	return nums.filter((x) => x == max).length == 1 ? max : min;
}

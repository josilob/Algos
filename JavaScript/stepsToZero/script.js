// Given a non-negative integer num, return the number of steps to reduce it to zero.
// If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
// Recursively!!!

let numberOfSteps = (num) => {
	let counter = 0;
	if (num <= 0) {
		return counter;
    }

    //helper function to keep track of counter
	const helper = (num, counter) => {
		if (num === 0) {
			return counter;
		}
		if (num % 2 === 0) {
			return helper(num / 2, counter + 1);
		} else {
			return helper(num - 1, counter + 1);
		}
		return counter;
	};
	return helper(num, counter);
};
console.log(numberOfSteps(14));

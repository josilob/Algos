// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(string) {
	// if string doesn't end with a number, add number 1 to the end of it
	if (isNaN(string.slice(-1))) {
		return `${string}1`;
	} else {
		// extract characters (isNaN(n)) => filters characters that are not a number
		// isNaN(n) recognizes numbers inside quotes too //=> isNaN('55') is false just as if it was isNaN(55)
		let chars = string
			.split('')
			.filter((n) => isNaN(n))
			.join('');
		let nums = string
			.split('')
			.filter((n) => !isNaN(n))
			.join('');
		let incrementedNum = +nums + 1; // +nums => converts operand to a number (workaround)
		// so if string was ending with a number, this is a 'sneaky' way to convert it to the integer in this case so it can be incremented (as opposed to the string where it would be just appended)

		// edge case with numbers that are 'zero padded' //=> 099 > 100
		if (nums.length > incrementedNum.toString().length) {
			let zeros = '';
			for (let i = 0; i < nums.length; i++) {
				zeros += '0';
			}
			return chars + (zeros + incrementedNum).slice(-nums.length);
		} else {
			return chars + incrementedNum;
		}
	}
}

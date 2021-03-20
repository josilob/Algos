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
	if (isNaN(string.slice(-1))) {
		return `${string}1`;
	} else {
		let chars = string
			.split('')
			.filter((n) => isNaN(n))
			.join('');
		let nums = string
			.split('')
			.filter((n) => !isNaN(n))
			.join('');
		let incrementedNum = +nums + 1;
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

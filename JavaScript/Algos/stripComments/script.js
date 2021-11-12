// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

const solution = (input, markers) => {
	let arr = input.split('\n');

	markers.forEach((marker) => {
		arr = arr.map((el) => {
			const idx = el.indexOf(marker);
			if (idx !== -1) {
				return el.substring(0, idx);
			} else return el.replace(/\s*$/, '');
		});
	});
	return arr.join('\n').trim();
};

const solution2 = (input, markers) => {
	return input
		.split('\n')
		.map((line) =>
			markers.reduce((line, marker) => line.split(marker)[0].trim(), line)
		)
		.join('\n');
};

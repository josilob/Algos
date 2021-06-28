// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example arr = [1, 1, 0, -1, -1];

// There are n=5 elements, two positive, two negative and one zero. Their ratios are:
// 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000 . Results are printed as:

// 0.400000
// 0.400000
// 0.200000

function plusMinus(arr) {
	let greater = 0,
		lesser = 0,
		zero = 0;

	arr.forEach((el) => {
		if (el > 0) greater += 1;
		else if (el < 0) lesser += 1;
		else zero += 1;
	});

	console.log(
		(greater / arr.length).toFixed(6).toString() +
			'\n' +
			(lesser / arr.length).toFixed(6).toString() +
			'\n' +
			(zero / arr.length).toFixed(6).toString()
	);
}

plusMinus([1, 2, 3, 4, 2, -3, -4, -5, -2, -2]);

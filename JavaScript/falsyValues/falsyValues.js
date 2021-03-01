// Remove all falsy values from an array
// Falsy values in JS are false, null, 0, "",undefined and NaN.

function falsey(arr) {
	return arr.filter((element) => !!element);
}

console.log(falsey([7, 'ate', '', false, 9]));

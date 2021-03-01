// Remove all falsy values from an array
// Falsy values in JS are false, null, 0, "",undefined and NaN.

function falsy(arr) {
	return arr.filter((element) => !!element);
}

console.log(falsy([7, 'false', 'or_not', false, 9, "", NaN]));

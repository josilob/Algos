// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alphanumeric(string) {
	// ^ meaning NOT, as ! in JS syntax (return true if there are matches that are NOT regex)
	return string.match(/^[a-z0-9]+$/i) !== null;
}

// one-liner
let alphanumeric2 = (s) => /^[a-z\d]+$/i.test(s);

// hardcoding
const alphanumeric3 = (str) => {
	if (!str.length) return false;
	const ALLOWED_CHARS =
		'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	for (let char of str) {
		if (!ALLOWED_CHARS.includes(char)) return false;
	}
	return true;
};

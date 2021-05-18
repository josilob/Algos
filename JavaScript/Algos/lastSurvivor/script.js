// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.

function lastSurvivor(letters, coords) {
	let word = letters.split('');
	for (let i = 0; i < coords.length; i++) {
		word.splice(coords[i], 1);
	}
	return word.join('');
}


function lastSurvivor2(s, a) {
	for (let x of a) s = s.slice(0, x) + s.slice(x + 1);
	return s;
}
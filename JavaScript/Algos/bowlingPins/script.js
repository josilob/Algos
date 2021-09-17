// Mount the Bowling Pins!
// Task:
// Did you ever play Bowling? Short: You have to throw a bowl into 10 Pins arranged like this:

// I I I I  # each Pin has a Number:    7 8 9 10
//  I I I                                4 5 6
//   I I                                  2 3
//    I                                    1

// You will get an Array with Numbers, e.g.: [3,5,9] and remove them from the field like this:

// I I   I
//  I   I
//   I
//    I

// Return a string with the current field.

// Note that:
// String.prototype.replace() is not allowed!

// You begin a new line with \n
// Each Line must be 7 chars long
// Fill the missing pins with a whitespace
// Have fun!

const bowlingPins = (a) => {
	const i = (n) => (a.includes(n) ? ' ' : 'I');
	return `${i(7)} ${i(8)} ${i(9)} ${i(10)}\n ${i(4)} ${i(5)} ${i(6)} \n  ${i(
		2
	)} ${i(3)}  \n   ${i(1)}   `;
};

console.log(bowlingPins([1, 4, 6]));

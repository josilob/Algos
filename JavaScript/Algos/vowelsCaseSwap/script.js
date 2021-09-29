// Challenge:

// Given a string, return a copy of the string with the vowels' case swapped.

// For this kata, assume that vowels are in the set "aeouiAEOUI".

// Example: Given a string "C is alive!", your function should return "C Is AlIvE!"

// Addendum: Your solution is only required to work for the ASCII character set.

// Please make sure you only swap cases for the vowels.

function swapVowelCase(str) {
	return str.split``.map((char) => {
		if (char.match(/[aeiou]/i)) {
			if (char.toLowerCase() === char) return char.toUpperCase();
			else return char.toLowerCase();
		}
		return char;
	}).join``;
}

function swapVowelCase2(str) {
	const swapCase = (l) =>
		l === l.toLowerCase() ? l.toUpperCase() : l.toLowerCase();
	return str
		.split('')
		.map((l) => ('aeouiAEOUI'.includes(l) ? swapCase(l) : l))
		.join('');
}

function swapVowelCase3(str) {
	return str.replace(/[aeiou]/gi, (x) =>
		/[AEIOU]/.test(x) ? x.toLowerCase() : x.toUpperCase()
	);
}

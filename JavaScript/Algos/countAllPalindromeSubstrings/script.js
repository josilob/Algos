// Count all the possible palindrome combinations in a string
// Substrings do not have to be unique
// Single letters count as a palindrome

function countPalindromesInString(s) {
	// Create object for Caching
	let palindromes = {};

	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j < s.length - i; j++) {
			let subString = s.substring(j, j + i + 1);
			if (subString in palindromes) palindromes[subString] += 1;
			else if (subString === subString.split('').reverse().join('')) {
				palindromes[subString] = 1;
			}
		}
	}

	return Object.values(palindromes).reduce((acc, val) => acc + val, 0);
}

console.log(
	countPalindromesInString(
		'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
	)
); // Executes in 0.6 sec

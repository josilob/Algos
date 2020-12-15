//with help of RegEx (regular expressions) workaround extra characters that are non-alphanumberic
// EXAMPLE:  \w ==> Matches any alphanumeric character from the basic Latin alphabet, including the underscore.
// Equivalent to [A-Za-z0-9_].

//e.g. /\w/ matches 'a' in 'apple', '5' in '$5.28', and '3' in '3D'.  - Just the first occurance, it needs flag -g to apply to all (globally)

/*
const word = 'HI THERE!!!!!';
word.replace(/[^\w]/g, '').toLowerCase(); ==> hithere (replaced everything non alphanumeric with empty string '')
*/

function anagrams(stringA, stringB) {
	const aCharMap = buildCharMap(stringA);
	const bCharMap = buildCharMap(stringB);

	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
		return false;
	}

	for (let char in aCharMap) {
		if (aCharMap[char] !== bCharMap[char]) {
			return false;
		}
	}
	return true;
}

console.log(anagrams('applepine   ', 'pineapple'));

//HELPER FUNCTION THAT BUILDS MAP FROM STRINGS
function buildCharMap(str) {
	const charMap = {};
	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
		charMap[char] = charMap[char] + 1 || 1;
	}
	return charMap;
}

/*

const obj = {
	a: 1,
	b: 1,
	c: 1,
};
Object.keys(obj).length; //utilize for comparison of two maps
*/

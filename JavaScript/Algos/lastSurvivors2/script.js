// Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

// "aa" => "b", "bb" => "c", .. "zz" => "a".
// The equal letters do not have to be adjacent.
// Repeat this operation until there are no possible substitutions left.
// Return a string.

// Example:

// let str = "zzzab"
//     str = "azab"
//     str = "bzb"
//     str = "cz"
// return "cz"
// Notes
// The order of letters in the result is not important.
// The letters "zz" transform into "a".
// There will only be lowercase letters.


const nextCharacter = (c) =>
	String.fromCharCode(97 + ((c.charCodeAt() - 96) % 26));

function lastSurvivors(s) {
	// func to replace characters
	function loopReplace(str) {
		for (let i = 0; i < str.length; i++) {
			for (var j = i + 1; j < str.length; j++) {
				if (str[i] == str[j]) {
					return str.replace(str[i], nextCharacter(str[i])).replace(str[i], '');
				}
			}
		}
		return false;
	}
	let n;
	while ((n = loopReplace(s))) {
		s = n;
	}
	return s;
}
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples;
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !'); // elloHay orldway !

function pigIt(str) {
	const arr = str.split(' ');
	return arr
		.map((word) => {
			return word.match(/[A-z]/i)
				? `${word.substr(1)}${word.substr(0, 1)}ay`
				: word;
		})
		.join(' ');
}
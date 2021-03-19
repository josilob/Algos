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

function pigIt2(str) {
	// \w - 'any word character' (alphanumeric - letters, numbers, regardless of case, plus underscore '_')
	return str.replace(/\w+/g, (w) => {
		return w.slice(1) + w[0] + 'ay';
	});
}

// Given a string, replace every letter with its position in the alphabet
// If anything in a text is not a letter, ignore it and don't return it

function alphabetPosition(text) {
	return text
		.toUpperCase()
		.match(/[a-z]/gi)
		.map((c) => c.charCodeAt() - 64)
		.join(' ');
}

console.log(alphabetPosition('This better work!!! abc-xyz'));

// Line 8 is for ASCII table values, since letters start @ 6

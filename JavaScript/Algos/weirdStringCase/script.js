// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string) {
	return string
		.split(' ')
		.map((str) => {
			let newStr = '';
			for (let i = 0; i < str.length; i++) {
				newStr += i % 2 === 0 || i === 0 ? str[i].toUpperCase() : str[i];
			}
			return newStr;
		})
		.join(' ');
}

function toWeirdCase2(string) {
	return string.replace(/(\w{1,2})/g, (m) => m[0].toUpperCase() + m.slice(1));
}

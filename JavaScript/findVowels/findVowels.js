function vowels(str) {
	let counter = 0;
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const checker = 'aeiou';
	// const checker = ['a','e','i','o','u'] //looks better

	for (let char of str.toLowerCase()) {
		if (checker.includes(char)) {
			counter += 1;
		}
	}
	return counter;
}

// console.log(vowels('Hello there'));

function vowels2(str) {
	const matches = str.match(/[aeiou]/gi);
	//g to apply regEx globally, i for case INSENSITIVE
	return matches ? matches.length : 0;
	//if no chars match, it would give NULL (falsey value) so we have to use ternary to fix that
}

console.log(vowels2('how mAny mAtchIng vOwels?'));

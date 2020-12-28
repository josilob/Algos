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

console.log(vowels('Hello there'));

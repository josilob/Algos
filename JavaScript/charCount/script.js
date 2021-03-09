// Write a function that takes in a string and returns alphanumeric character count!

function charCount(str) {
	let obj = {};
	for (let char of str) {
		char = char.toLowerCase();
		console.log(char);
		if (/[a-z0-9]/.test(char)) {
			obj[char] = ++obj[char] || 1;
		}
	}
	return obj;
}

console.log(charCount('is ThIs$# Thing WorkING'));

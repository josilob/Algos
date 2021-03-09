// Write a function that takes in a string and returns alphanumeric character count!

function charCount(str) {
	let obj = {};
	for (let char of str) {
		char = char.toLowerCase();
		if (/[a-z0-9]/.test(char)) {
			obj[char] = ++obj[char] || 1;
		}
	}
	return obj;
}
// console.log(charCount('is ThIs$# Thing WorkING'));
//////////////////////////////////////////////////

function isAlphaNumberic(char) {
	let code = char.charCodeAt(0);
	if (
		!(code > 47 && code < 58) && // numeric 0-9
		!(code > 64 && code < 91) && // upper alphabet
		!(code > 96 && code < 123) // lowercase
	) {
		return false;
	}
	return true;
}

function charCount2(str) {
	let obj = {};
	for (let char of str) {
		if (isAlphaNumberic(char)) {
			char = char.toLowerCase();
			obj[char] = ++obj[char] || 1;
		}
	}
	return obj;
}
console.log(charCount2('is ThIs$# Thing WorkING'));

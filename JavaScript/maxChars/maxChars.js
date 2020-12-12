const string = 'Hello There!';
const chars = {};

// for (let char of string) {
// 	if (!chars[char]) {
// 		chars[char] = 1;
// 	} else {
// 		chars[char]++;
// 	}
// }

function maxChar(str) {
	let charMap = {};
	let max = 0;
	let maxChar = '';
	//same as above, just more eloquently
	for (let char of str) {
		charMap[char] ? charMap[char]++ : (charMap[char] = 1);
	}

	for (let char in charMap) {
		if (charMap[char] > max) {
			max = charMap[char];
			maxChar = char;
		}
	}
	return `Character that repeats the most is: ${maxChar} at ${max} times`;
}
console.log(maxChar('Hello There World!'));

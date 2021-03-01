// Return true if the string in the first element of the array contains all the letters of the string in the second element of the array.
// For example ['hello', 'Hole'] => true // case insensitive
// arguments ['hello', 'hey'] => false as there us no 'y' in 'hello'

function mutation(arr) {
	const [str1, str2] = arr.map((s) => s.toLowerCase());

	for (let i = 0; i < str2.length; i++) {
		const letter = str2[i];
		if (str1.indexOf(letter) === -1) {
			return false;
		}
	}
	return true;
}

console.log(mutation(['hello', 'hell']));

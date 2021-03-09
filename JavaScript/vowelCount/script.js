// PESEUDOCODE
/*
1. Declare variable total and set to 0
2. Set the input string to lowercase 
3. Create a for loop
4. Loop through every character in the string to see if it is a vowel
5. Use an if statement to check each character if equal to a vowel
6. If character is a vowel then increment total by 1
7. After loop ends, return total, which is the vowel count
*/

function vowelCount(str) {
	let total = 0;
	str = str.toLowerCase();
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (
			char === 'a' ||
			char === 'e' ||
			char === 'i' ||
			char === 'o' ||
			char === 'u'
		) {
			total += 1;
		}
	}
	console.log(str);
	return total;
}
console.log(vowelCount('All cows eat grass'));

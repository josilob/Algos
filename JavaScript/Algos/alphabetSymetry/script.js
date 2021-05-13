// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

function solve(arr) {
	let solutionArr = [];

	arr.forEach((word) => {
		let counter = 0;

		for (let i = 0; i <= word.length - 1; i++) {
			if (i === word[i].toUpperCase().charCodeAt() - 65) counter++;
		}
		solutionArr.push(counter);
	});
	return solutionArr;
}

console.log(solve(['abode', 'ABc', 'xyzD'])); //[ 4, 3, 1 ]
console.log(solve(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc'])); //[ 6, 5, 7 ]

// loop through all the words in the array
// pick a word, loop through its letters
// check if index of each letter as uppercase matches charCodeAt-65
// if it matches, increment the counter for that word
// at the end of the word, push the counter value in the array
// return the entire array
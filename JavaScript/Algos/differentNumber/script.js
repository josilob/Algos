// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// Examples:
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of

function iqTest(numbers) {
	numbers = numbers.split(' ');

	let positions = [[], []];

	for (let i = 0; i < numbers.length; i++) {
		positions[numbers[i] % 2].push(i + 1);
	}

	if (positions[0].length === 1) return positions[0][0];
	if (positions[1].length === 1) return positions[1][0];

	return 0;
}

// console.log(iqTest('1 3 5 7 7 9 11 6')); // => 8th(last) element of string

function iqTest2(numbers) {
	var nums = numbers.split(' ').map((x) => x % 2); // divide each num by 2
	var sum = nums.reduce((a, b) => a + b); //
	var target = sum > 1 ? 0 : 1;

	return nums.indexOf(target) + 1;
}
// console.log(iqTest2('1 3 5 7 7 9 11 6'));

const iqTest3 = (test) => {
	const numbers = test.split(' ');
	const evens = numbers.filter((el) => el % 2);
	const odds = numbers.filter((el) => !(el % 2));
	const differ = evens.length == 1 ? evens[0] : odds[0];

	return numbers.indexOf(differ) + 1;
};

// console.log(iqTest3('1 3 5 7 7 9 11 6'));

function reverse(str) {
	return str.split('').reverse().join('');
}
// console.log(reverse('I am reversing a string'));

// ################  forEach  ############### //

function reverse2(str) {
	const chars = str.split('');
	let reversed = [];
	chars.forEach((char) => reversed.unshift(char));
	return reversed.join('');
}
// console.log(reverse2('How to reverse a string'));

// ############### for...of ################### //
function reverse3(str) {
	let reversed = '';
	for (let char of str) {
		reversed = char + reversed;
	}
	return reversed;
}
// console.log(reverse3('How to reverse a string'));

// ################# REDUCE  ################### //
function reverse4(str) {
	return str
		.split('')
		.reduce((reversed, character) => character + reversed, '');
	return reversed;
}
// console.log(reverse4('How to reverse a string'));

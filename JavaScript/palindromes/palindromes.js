function palindrome(str) {
	return str === str.split('').reverse().join('') ? true : false;
}

//console.log(palindrome('apple'));
// console.log(palindrome('abba'));
// console.log(palindrome('Abba')); // hard check (===) gives false

function palindrome2(str) {
	return str.split('').every((char, i) => {
		return char === str[str.length - i - 1];
	});
}
// console.log(palindrome2('watermelon'));
// console.log(palindrome2('stressed desserts'));

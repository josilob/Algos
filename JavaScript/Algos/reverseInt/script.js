function reverseInt(n) {
	const reversedNum = parseInt(n.toString().split('').reverse().join(''));
	// if number < 0, multiply with -1 or Math.sign(number)
	return reversedNum * Math.sign(n);
}
// ONE-LINER
function reverseInt2(n) {
	return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

console.log(reverseInt(951));
console.log(reverseInt(-951000));
console.log(reverseInt(-9501000));

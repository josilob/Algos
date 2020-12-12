function reverseInt(n) {
	return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

console.log(reverseInt(-9510));

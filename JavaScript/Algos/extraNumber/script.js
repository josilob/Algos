// You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

function extraNumber(a, b, c) {
	// Bitwise XOR
	// The bitwise XOR operator (^) returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.
	return a ^ b ^ c;
}

function extraNumber2(a, b, c) {
	if (a === b) return c;
	if (b === c) return a;
	else return b;
}

console.log(extraNumber(1, 1));

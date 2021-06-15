// Given a divisor and a bound, find the largest integer N such that:
// - N is divisible by divisor.
// - N is less than or equal to bound.
// - N is greater than 0.

function maxMultiple(divisor, bound) {
	return bound - (bound % divisor);
}

function maxMultiple2(divisor, bound) {
	while (bound > 0) {
		if (bound % divisor === 0) return bound;
	}
	bound--;
}

console.log(maxMultiple(5, 25));

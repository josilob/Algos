// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.

function divisors(n) {
	let divisors = 0;
	mod = n;
	while (mod > 0) {
		if (n % mod === 0) {
			divisors++;
		}
		mod--;
	}
	return divisors;
}

// Examples;
console.log(divisors(4)); // 1, 2, 4
console.log(divisors(5)); // 1, 5
console.log(divisors(12)); // 1, 2, 3, 4, 6, 12

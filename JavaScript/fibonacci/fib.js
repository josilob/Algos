function fib(n) {
	//initialize result array to produce first sum that can't be made otherwise (0+0 is always = 0()
	const result = [0, 1];

	for (let i = 2; i <= n; i++) {
		const a = result[result.length - 1];
		const b = result[result.length - 2];

		result.push(a + b);
	}
	return result[n];
}
// console.log(fib(5));

// Big O notation:
// Every increase in n increases runtime by 1, making it linear (what single FOR loops generally are )

// Classic RECURSION solution:

function fib2(n) {
	if (n < 2) {
		// The only case when we ACTUALLY return A NUMBER
		return n;
		// Otherwise keep REINVOKING the function until it boils down to PREVIOUS solution
	} else return fib2(n - 1) + fib2(n - 2);
}
// We keep calling fibonacci with smaller and smaller numbers, until they actually have SOME value to add up.
console.log(fib2(5));


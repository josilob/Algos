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
// console.log(fib(41))
// console.log(fib2(41));

// solution is QUADRATIC, for each number we add, runtime dramatically increases

// We keep calling fibonacci with smaller and smaller numbers, until they actually have SOME value to add up. But many times, the same valure is RE-CALCULATED!!!

// Way to improve recursive solution is with memoization:
// Store the arguments of each function call along with the result. If the function is called again with the same arguments, return the precomputed result, rather than running the function again

/*
In computing, MEMOIZATION or MEMOISATION is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
*/

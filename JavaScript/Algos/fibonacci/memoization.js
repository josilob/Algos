// Let's improve recursive solution
// In computing, MEMOIZATION or MEMOISATION is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

const recursiveFib = (n) => {
	if (n < 2) {
		return n;
	} else return fib(n - 1) + fib(n - 2);
};

const memoize = (fn) => {
	// object that we will use for storing calls of the 'improved function'
	const cache = {};

	// Store the arguments of each function call along with the result.
	// If the function is called again with the same arguments, return the precomputed result, rather than running the function again
	return function (...args) {
		if (cache[args]) {
			return cache[args];
		}
		// when IF statement is bypassed, it means we've never called the function with that set of arguments, meaning we have to calculate it and store in the cache object ()
		const result = fn.apply(this, args);
		cache[args] = result;
		return result;
	};
};

const fib = memoize(recursiveFib);
// console.log(fib(10));
console.log(fib(50));

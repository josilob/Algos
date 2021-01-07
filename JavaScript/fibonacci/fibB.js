// Memoization way:

function memoize(fn) {
	const cache = {}; // record of previous results - caching

	//In the memoize function, we return a function that can take in any amount of arguments due to the use of rest parameter

	return function (...args) {
		if (cache[args]) {
			return cache[args];
		}
		// The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
		const result = fn.apply(this, args);
		//store result in the key args of cache object:
		cache[args] = result;

		return result;
	};
}

function slowFib(n) {
	if (n < 2) {
		return n;
	}
	// Return MEMOIZED value, instead of recursive one
	// That's why we do not re-invoke same 'slowFib' function
	else return fib(n - 1) + fib(n - 2);
}

// We store calculated values in cache of 'memoize' function from the top
const fib = memoize(slowFib);

console.log(fib(40));

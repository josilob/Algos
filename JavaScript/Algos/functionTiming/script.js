const { performance } = require('perf_hooks');

function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += 1;
	}
	return total;
}

let t1 = performance.now();
// addUpTo(20);
// addUpTo(200000);
addUpTo(200000000);
let t2 = performance.now();
console.log(`Time to execute the function is : ${(t2 - t1) / 1000} seconds`);

/*
Find the sum of the digits of all the numbers from 1 to N
(both ends included).
Examples
# N = 4
1 + 2 + 3 + 4 = 10
# N = 10
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46
# N = 12
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51
*/

function twistedSum(n) {
	let sum = 0;
	for (let num = 0; num <= n; num++) {
		let numStr = num.toString();
		if (numStr.length === 1) sum += +numStr;
		else numStr.split('').forEach((digit) => (sum += +digit));
	}
	return sum;
}

/// w/ Helper fn

function twistedSum2(n) {
	return n < 2 ? n : digits(n) + twistedSum2(n - 1);
}
function digits(n) {
	let sum = 0;
	while (n > 9) {
		sum += n % 10;
		n = Math.floor(n / 10);
	}
	return sum + n;
}

///// 3rd

function twistedSum(n, sum = 0) {
	for (let i = 1; i <= n; i++)
		sum +=
			i < 10
				? i
				: i
						.toString()
						.split('')
						.reduce((a, b) => parseInt(a) + parseInt(b));
	return sum;
}

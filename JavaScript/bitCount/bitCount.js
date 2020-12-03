const countBits = function (n) {
	// make an array with the bit result
	const base = n.toString(2).split('');

	// make a sum with the array and make the index a Number
	const result = base.reduce((sum, num) => sum + Number(num), 0);

	return result;
};

const countBits2 = function (n) {
	n = n.toString(2).replace(/0/g, '').split('');
	let count = 0;
	for (let i = 0; i < n.length; i++) {
		count += parseInt(n[i]);
	}
	return count;
};

console.log(countBits(67));
console.log(countBits2(67));

function beautifulDays(i, j, k) {
	const arr = [];
	while (i <= j) {
		arr.push(i);
		i++;
	}
	const reverseEl = (num) => +('' + num).split('').reverse().join('');
	const beautifulDays = arr.filter(
		(el) => Math.abs(el - reverseEl(el)) % k === 0
	);

	return beautifulDays.length;
}

function findDigits(n) {
	let num = 0,
		digits = ('' + n).split('');
	digits.forEach((el) => {
		if (n % el === 0 && el !== 0) num++;
	});
	return num;
}

function birthday(s, d, m) {
	// d is Sum, m is array size
	let count = 0;
	for (let i = 0; i < s.length - m + 1; i++) {
		if (s.slice(i, i + m).reduce((sum, el) => sum + el, 0) == d) count += 1;
	}
	return count;
}

function repeatedString(s, n) {
	if (!s.includes('a')) return 0;
	let a,
		remainder = 0;

	if (n >= s.length) {
		a = s.match(/a/g).length * Math.floor(n / s.length);
		while (remainder < n % s.length) {
			if (s[remainder] === 'a') a++;
			remainder++;
		}
		return a;
	}
	return s.slice(0, n + 1).match(/a/g).length;
}

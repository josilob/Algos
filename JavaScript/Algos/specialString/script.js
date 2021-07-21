// abcbaba => 10 (1 for each character + same characters in a row + same characters around different middle char)
// [a, b, c, b, a, b, a, bcb, bab, aba]

function substrCount(n, s) {
	s = s.split('');
	const incr = (i, num = 1) => {
		if (s[i] == s[i + num]) {
			n += 1;
			return incr(i, num + 1);
		}
	};
	const palindrome = (i, num = 1) => {
		const letters = new Set(s.slice(i - num, i + num + 1));
		if (
			letters.size == 2 &&
			i - num >= 0 &&
			i + num <= s.length &&
			s[i + num] == s[i - 1] &&
			s[i - num] == s[i + 1]
		) {
			n += 1;
			return palindrome(i, num + 1);
		}
	};
	for (let i = 0; i < s.length; i++) {
		incr(i);
		palindrome(i);
	}
	return n;
}

function substrCount(n, s) {
	s = s.split('');
	const incr = (i, num = 1) => {
		if (s[i] == s[i + num]) {
			n += 1;
			return incr(i, num + 1);
		}
	};
	const palindrome = (i, num = 1) => {
		const letters = new Set(s.slice(i - num, i + num + 1));
		if (
			letters.size == 2 &&
			i - num >= 0 &&
			i + num <= s.length &&
			s[i + num] == s[i - 1] &&
			s[i - num] == s[i + 1]
		) {
			n += 1;
			return palindrome(i, num + 1);
		}
	};
	for (let i = 0; i < s.length; i++) {
		incr(i);
		palindrome(i);
	}
	return n;
}

console.log(substrCount(7, 'abcbaba'));

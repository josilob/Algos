function appendAndDelete(s, t, k) {
	let count = 0;
	for (let i = 0; i < t.length; i++) {
		if (s[i] == t[i]) count++;
		else break;
	}
	const totalLength = s.length + t.length;

	// if amount of different letters divided by 2 is the same as k divided by 2
	// we can make possible combination
	if (
		(totalLength <= 2 * count + k && totalLength % 2 == k % 2) ||
		totalLength < k
	) {
		return 'Yes';
	} else {
		return 'No';
	}
}

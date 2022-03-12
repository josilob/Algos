function saveThePrisoner(n, m, s) {
	const last = (s + m - 1) % n;
	if (last === 0) return n;
	return last;
}

function pageCount(n, p) {
	const front = Math.floor(p / 2);
	const back = Math.floor(n / 2 - front);
	return Math.min(front, back);
}

function utopianTree(n) {
	let cycle = 1;
	let height = 1;
	while (cycle <= n) {
		cycle % 2 !== 0 ? (height *= 2) : height++;
		cycle++;
	}
	return height;
}

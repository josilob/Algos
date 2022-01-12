function viralAdvertising(n) {
	let like = 2;
	let cumulative = 2;
	let shared = 0;
	for (let i = 2; i <= n; i++) {
		shared = like * 3;
		like = Math.floor(shared / 2);
		cumulative += like;
	}
	return cumulative;
}

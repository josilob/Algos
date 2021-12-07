function getTotalX(a, b) {
	let solution = 0;
	for (let i = a[a.length - 1]; i <= b[0]; i++) {
		if (a.every((el) => i % el === 0)) {
			if (b.every((el) => el % i === 0)) {
				solution++;
			}
		}
	}
	return solution;
}

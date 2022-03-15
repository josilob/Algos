function jumpingOnClouds(c, k) {
	if (c.length === k) return c[0] === 1 ? 97 : 99;

	let idx = 0 + k;
	let energy = c[idx] === 1 ? 97 : 99;
	while (idx) {
		idx += k;
		if (idx > c.length - 1) idx = idx % c.length;
		energy = c[idx] === 1 ? energy - 3 : energy - 1;
	}
	return energy;
}

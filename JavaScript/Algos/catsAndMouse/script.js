function catAndMouse(x, y, z) {
	const diff = (a, b) => Math.abs(a - b);

	if (diff(x, z) < diff(y, z)) return `Cat A`;
	else if (diff(x, z) > diff(y, z)) return `Cat B`;
	else return `Mouse C`;
}

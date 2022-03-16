function squares(a, b) {
	// calculate the difference between square root of bigger and smaller range
	return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
}

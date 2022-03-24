function camelcase(s) {
	s = s.split('').filter((c) => c === c.toUpperCase());
	return s.length + 1;
}

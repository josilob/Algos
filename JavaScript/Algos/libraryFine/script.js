function libraryFine(d1, m1, y1, d2, m2, y2) {
	// 1-date returned 2-due date
	if (y1 > y2) return 10000 * (y1 - y2);
	else if (y1 == y2 && m1 > m2) return (m1 - m2) * 500;
	else if (y1 == y2 && m1 == m2 && d1 > d2) return (d1 - d2) * 15;
	return 0;
}

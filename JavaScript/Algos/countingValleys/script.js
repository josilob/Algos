function countingValleys(steps, path) {
	path = path.split('');
	let valleys = 0;
	let altitude = 0;
	path.forEach((step) => {
		if (step === 'U') {
			if (altitude < 0 && altitude == -1) {
				valleys++;
			}
			altitude++;
		}

		if (step === 'D') altitude--;
	});
	return valleys;
}

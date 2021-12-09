function getMoneySpent(keyboards, drives, b) {
	let combinations = [];
	keyboards.forEach((kb) => {
		drives.forEach((dr) => {
			if (kb + dr <= b) combinations.push(kb + dr);
		});
	});
	return combinations[0] ? Math.max(...combinations) : -1;
}

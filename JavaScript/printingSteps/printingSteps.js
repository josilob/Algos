const steps = (n) => {
	for (let i = 0; i < n; i++) {
		let stair = '';

		for (let j = 0; j < n; j++) {
			if (j <= i) {
				stair += '#';
			} else {
				stair += ' ';
			}
		}
		console.log(stair);
	}
};
// steps(5);

const recursiveSteps = (n, i, stair = '') => {
	if (n === i || n > i) return;

	if (n === stair.length) {
		console.log(stair);
		return steps(n, i + 1);
	}

	stair.length <= i ? (stair += '#') : (stair += ' ');

	steps(n, i, stair);
};
recursiveSteps(8);

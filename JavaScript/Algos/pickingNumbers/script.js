function pickingNumbers(a) {

	let max = 0;
	let obj = {};

	a.forEach((el) => {
		obj[el] = (obj[el] || 0) + 1;
	});

	for (let i = 0; i < a.length; i++) {
		let count = 0;
		for (let j = 0; j < a.length; j++) {
			if (a[j] == a[i] || a[j] == a[i] + 1) {
				count++;
			}
		}
		max = Math.max(max, count);
	}
  
	return max;
}

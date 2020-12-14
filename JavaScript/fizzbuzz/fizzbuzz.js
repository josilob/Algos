function fizzbuzz(n) {
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			// could also have single condition as (if i % 15 === 0) as lowest common multiple
			console.log('fizzbuzz');
		} else if (i % 5 === 0) {
			console.log('buzz');
		} else if (i % 3 === 0) {
			console.log('fizz');
		} else console.log(i);
	}
}
// fizzbuzz(50)

function fizzbuzz2(n) {
	for (let i = 1; i <= n; i++) {
		switch (0) {
			case i % 15:
				console.log('fizzbuzz');
				break;
			case i % 3:
				console.log('fizz');
				break;
			case i % 5:
				console.log('buzz');
				break;
			default:
				console.log(i);
		}
	}
}
fizzbuzz2(50);

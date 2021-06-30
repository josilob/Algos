// Complete the staircase function in the editor below.
// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of N
// Its base and height are both equal to N. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// staircase has the following parameter(s):
// int n: an integer

// Print a staircase as described above.

function staircase(n) {
	let pyramid = [];
	for (let i = 0; i < n; i++) {
		pyramid.push(' '.repeat(n));
		pyramid[i] = pyramid[i].substring(0, n - 1 - i) + `#`.repeat(i + 1);
	}

	console.log(pyramid.join`\n`);
}

staircase(22);

// SHINCHAN; => NNHAN
// NOHARAAA; => NHAAAA

// HNHAN
// NHAAAA

function commonChild(x, y) {
	if (!x.length || !y.length) return 0;
	const arr1 = [...x];
	const arr2 = [...y];
	// define n x m sized array filled with 0's
	let matrix = [...Array(arr1.length + 1)].map((e) =>
		Array(arr2.length + 1).fill(0)
	);
	// fill the matrix
	for (let i = 1; i <= arr1.length; i++) {
		for (let j = 1; j <= arr2.length; j++) {
			if (arr1[i - 1] == arr2[j - 1]) {
				matrix[i][j] = matrix[i - 1][j] + 1;
			} else matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
		}
	}
	// return the max which is at the right bottom corner of the matrix
	return matrix[matrix.length - 1][matrix[0].length - 1];
}

function commonChild(s1, s2) {
	// Create dp table
	const dp = Array(s1.length + 1)
		.fill(0)
		.map(() => Array(s2.length + 1).fill(0));
	for (let i = 1; i < dp.length; i++) {
		for (let j = 1; j < dp[i].length; j++) {
			// If the letters match, look diagonally to get the max subsequence before this letter and add one
			if (s1[i - 1] === s2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
			} else {
				// If there is no match, set the cell to the previous current longest subsequence
				dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
			}
		}
	}
	return dp[s1.length][s2.length];
}

console.log(commonChild2('OUDFRMYMAW', 'AWHYFCCMQX'));

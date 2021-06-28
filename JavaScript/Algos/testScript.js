function diagonalDifference(arr) {
	const firstDiagonal = arr.reduce(
		(sum, el, idx, arr) => sum + arr[idx][idx],
		0
	);
	const secondDiagonal = arr.reduce(
		(sum, el, idx, arr) => sum + arr[idx][el.length - idx],
		0
	);
	return Math.abs(firstDiagonal - secondDiagonal);
}

const arr = [
	[1, 2, 3],
	[2, 3, 4],
	[10, 4, 5]
];
// console.log(arr.reduce((sum, el, idx, arr) => sum + arr[idx][idx], 0));
// console.log(
// 	arr.reduce((sum, el, idx, arr) => sum + arr[idx][el.length - idx - 1], 0)
// );
